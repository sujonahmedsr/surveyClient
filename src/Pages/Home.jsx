import Faq from "./Faq";
import Hero from "./Hero";
import Industry from "./Industry";
import MostRecent from "./MostRecent";
import Survey from "./Survey";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Survey></Survey>
            <Industry></Industry>
            <MostRecent></MostRecent>
            <Faq></Faq>
        </div>
    );
};

export default Home;