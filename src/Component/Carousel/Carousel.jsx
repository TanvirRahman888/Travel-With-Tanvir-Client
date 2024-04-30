import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    return (

        <div>
            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }} 
                // scrollbar={{ draggable: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="hero bg-cover h-auto" style={{ backgroundImage: 'url(https://d2dqksvx8j00ig.cloudfront.net/JFront/Default/lifestyle/media/jeunesse-travel-video-thumbnail.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="flex flex-col hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold flex-grow">Welcome to <br /> Travel with Tanvir</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary"><Link to={'/TouristSpot'}>All Spot</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero" style={{ backgroundImage: 'url(https://tntribune.com/wp-content/uploads/2021/08/feat_30d48d6e-7b84-4dfe-bf22-6306f8a2d403.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="flex flex-col hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold flex-grow">Welcome to Bangladesh</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary"><Link to={'/TouristSpot/Bangladesh'}>Explore Bangladesh</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero" style={{ backgroundImage: 'url(https://auspost.com.au/content/dam/corp/travel-essentials/photo-boats-on-water-in-thailand.jpg.auspostimage.970*0.169.medium.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="flex flex-col hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold flex-grow">Welcome to Thailand</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary"><Link to={'/TouristSpot/Thailand'}>Explore Thailand</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero" style={{ backgroundImage: 'url(https://auspost.com.au/content/dam/corp/travel-essentials/photo-boats-on-water-in-thailand.jpg.auspostimage.970*0.169.medium.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="flex flex-col hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold flex-grow">Welcome to Indonesia</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary"><Link to={'/TouristSpot/Indonesia'}>Explore Indonesia</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Carousel;