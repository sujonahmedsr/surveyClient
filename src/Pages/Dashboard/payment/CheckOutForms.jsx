import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../AuthProvider/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const CheckOutForms = () => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const [error, setError] = useState(null)
    const [transactionId, setTransactionId] = useState(null)
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState(null)
    const totalPrice = 75
    const navigate = useNavigate()
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])
    const handleSubmit = async e => {
        e.preventDefault()

        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        if (!stripe || !elements) {
            return
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm paymetn 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymus',
                    name: user?.displayName || 'anonymus'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError);
        } else {
            console.log('paymentInten', paymentIntent);
            if (paymentIntent && paymentIntent.status === 'succeeded') {
                console.log(paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
        }

        const payments = {
            email: user?.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            status: 'pending'
        }
        const res = await axiosSecure.post('/payments', payments)
        console.log(res);
        if (res.data?.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment Successful..Now You are a Pro-User",
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/Dashboard')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-5 border hover:border-blue-300 duration-800">
            <div className="text-center space-y-3">
                <h1 className="text-3xl font-bold">Payment For Pro User</h1>
                <p className="text-2xl font-semibold">Amount: $ {totalPrice}</p>
            </div>
            <div className="space-y-4">
                <div className="flex lg:flex-row flex-col items-center justify-between gap-7">
                    <div className="space-y-2">
                        <label>Name</label>
                        <input className="w-full rounded border-blue-400 " readOnly type="text" defaultValue={user?.displayName} />
                    </div>
                    <div className="space-y-2">
                        <label>Amount</label>
                        <input className="w-full rounded border-blue-400 " readOnly type="text" defaultValue={`Total Amount : $${totalPrice}`} />
                    </div>
                </div>
                <div className="space-y-2">
                    <label>Email</label>
                    <input className="w-full rounded border-blue-400 " readOnly type="text" defaultValue={user?.email} />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="">Card Number For Payments</label>
                <CardElement className="border p-3 border-blue-300 rounded"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </div>
            <button type="submit" className="px-6 py-2 rounded-md bg-blue-800 hover:bg-blue-700 mt-4 text-white" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-700">{error}</p>
            {
                transactionId && <p className="text-blue-800"> Transaction Id : {transactionId}</p>
            }
        </form>
    );
};

export default CheckOutForms;