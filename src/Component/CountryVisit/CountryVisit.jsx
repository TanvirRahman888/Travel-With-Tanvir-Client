
import { Link } from "react-router-dom";

const CountryVisit = () => {
    

    return (
        <div  className="bg-blue-100 rounded-2xl my-6 p-5 mt-20">
            <div>
                <h1 className="text-5xl font-bold text-center mb-5">Explore your next country </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-5">

                    <Link to={`/TouristSpot/Bangladesh`}>
                        <div className="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-100 bg-cover h-72" style={{
                            backgroundImage: `url('https://www.bproperty.com/blog/wp-content/uploads/JP5-30.10.17-870x522-870x508.jpg')`
                        }}>
                            <h3 className="text-4xl text-center font-extrabold text-white">Bangladesh</h3>
                        </div>
                    </Link>
                    <Link to={`/TouristSpot/Thailand`}>
                        <div className="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-100 bg-cover h-72" style={{
                            backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/008/273/620/original/bangkok-thailand-landmark-logo-banner-free-vector.jpg')`
                        }}>
                            <h3 className="text-4xl text-center font-extrabold text-white">Thailand</h3>
                        </div>
                    </Link>
                    <Link to={`/TouristSpot/Indonesia`}>
                        <div className="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-100 bg-cover h-72" style={{
                            backgroundImage: `url('https://i.pinimg.com/736x/2a/5f/46/2a5f46fdd347e897780df42eda52b117.jpg')`
                        }}>
                            <h3 className="text-4xl text-center font-extrabold text-blue-500">Indonesia</h3>
                        </div>
                    </Link>
                    <Link to={`/TouristSpot/Malaysia`}>
                        <div className="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-100 bg-cover h-72" style={{
                            backgroundImage: `url('https://img.freepik.com/premium-vector/travel-malaysia-monument-kuala-lumpur-city-modern-building-circle-texture-background-business-travel_49537-300.jpg')`
                        }}>
                            <h3 className="text-4xl text-center font-extrabold text-white">Malaysia</h3>
                        </div>
                    </Link>
                    <Link to={`/TouristSpot/Vietnam`}>
                        <div className="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-100 bg-cover h-72" style={{
                            backgroundImage: `url('https://i0.wp.com/zestinatote.com/wp-content/uploads/2023/12/vietnam-ban-gioc-falls.jpg')`
                        }}>
                            <h3 className="text-4xl text-center font-extrabold text-white">Vietnam</h3>
                        </div>
                    </Link>
                    <Link to={`/TouristSpot/Cambodia`}>
                        <div className="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-100 bg-cover h-72" style={{
                            backgroundImage: `url('https://luggageandlipstick.com/wp-content/uploads/2023/02/10-Vimean-Ekareach_Patti-Morrow_luggageandlipstick.com_070856.jpg')`
                        }}>
                            <h3 className="text-4xl text-center font-extrabold text-white">Cambodia</h3>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CountryVisit;