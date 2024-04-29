import AboutUs from "../AboutUs/AboutUs";
import Carousel from "../Carousel/Carousel";
import ContactUs from "../ContactUs/ContactUs";
import CountryVisit from "../CountryVisit/CountryVisit";
import Testimonial from "../Testimonial/Testimonial";
import TopAttractions from "../TopAttractions/TopAttractions";



const Home = () => {

    
    return (
        <div>
            <Carousel></Carousel>
            <TopAttractions></TopAttractions>
            <CountryVisit></CountryVisit>
            <AboutUs></AboutUs>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;