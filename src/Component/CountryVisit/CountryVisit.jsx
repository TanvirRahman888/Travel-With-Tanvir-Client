
import { Link } from "react-router-dom";


const CountryVisit = () => {
    


    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Explore your next country </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-5">
                    <Link to={`/TouristSpot/Bangladesh`}>
                        <div className="card  shadow-xl image-full">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Bangladesh" /></figure>
                            <div className="card-body flex justify-center items-center">
                                <h2 className="card-title">Bangladesh</h2>
                            </div>
                        </div>
                    </Link>
                    {/* {
                    countries.map((country,idx)=><Country key={idx} country={country}></Country>)
                } */}


                </div>
            </div>
        </div>
    );
};

export default CountryVisit;