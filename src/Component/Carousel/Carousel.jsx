import { Link } from "react-router-dom";

import 'animate.css';

const Carousel = () => {
    return (

        <div className="relative">
        <div className="carousel w-full max-h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.traveltrendstoday.in/wp-content/uploads/2022/10/aee173df98a5b74ebe361beb2b054505.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/cover26.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/12/Post-Covid-Travel-Guide-To-Thailand-Cover-Thailand.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-5 left-2 md:bottom-5 md:left-32 bg-gray-50 p-2 md:p-10 bg-opacity-50 rounded-2xl animate__animated animate__pulse">
            <h2 className="text-xl md:text-3xl text-gr font-black">Find Your Next Spot </h2>
            <button className="btn btn-success animate__animated animate__swing mt-5"><Link to={'/TouristSpot'}>All Spot</Link></button>
        </div>

    </div>
    );
};

export default Carousel;