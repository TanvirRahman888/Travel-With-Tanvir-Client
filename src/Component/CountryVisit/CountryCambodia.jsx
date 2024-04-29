import { Link, useLoaderData } from "react-router-dom";



const CountryCambodia = () => {
    const countrySpots = useLoaderData();
    console.log(countrySpots);
    
    return (
        <div>
            <h1 className="text-xl">Cambodia</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    countrySpots.map(spot => <div key={spot._id} className="flex flex-col gap-2 p-5 bg-slate-300 min-h-52">
                        <h3 className="text-lg font-bold mb-3">
                            {spot.spotName}, {spot.location}, {spot.countryName}
                        </h3>
                        <img src={spot.image} alt="Location Image" className="flex-grow" />
                        <h3 className=""><span className="font-semibold">Seasonality: </span>{spot.seasonality}</h3>

                        <div className="flex items-end gap-2 mb-3 ">
                            <h3 className=""><span className="font-semibold">Cost: </span>{spot.cost}</h3>
                            <h3 className=""><span className="font-semibold">Time: </span>{spot.duration} days</h3>
                        </div>
                        <h3 className=""><span className="font-semibold">Yearly Visitors:</span> {spot.yearlyVisitors}</h3>
                        <Link to={`/TouristSpot/${spot._id}`}>
                            <button className="btn btn-info"> View Details</button>
                        </Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default CountryCambodia;