import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForms from './CheckOutForms';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51PM0BNBzfIvfzi4Hzg3LZyOWSJyPdxkq4Bn1UABEdej0x8abQoG18os7aBW1GzqSqTgyu4bbi6steluxaJySdRNm00OAIee7ed');

const Payment = () => {
    return (
        <div className="max-w-2xl mx-auto py-32">
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForms></CheckOutForms>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;