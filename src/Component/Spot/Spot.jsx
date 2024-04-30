import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const Spot = ({ spot }) => {
    const { spotName, countryName, location, cost, image, seasonality, duration, yearlyVisitors, _id } = spot;

    return (
        <div className="flex flex-col gap-2 p-5 bg-blue-50 rounded-2xl min-h-52">

            <h3 className="text-lg font-bold mb-3 ">
                {spotName}, {location}, {countryName}
            </h3>
            <Zoom className="flex-grow"><img src={image} alt="Location Image" className="h-full rounded-xl" /></Zoom>
            <h3 className=""><span className="font-semibold">Seasonality: </span>{seasonality}</h3>

            <div className="flex items-end gap-2 mb-3 ">
                <h3 className=""><span className="font-semibold">Cost: </span>{cost}</h3>
                <h3 className=""><span className="font-semibold">Time: </span>{duration} days</h3>
            </div>
            <h3 className=""><span className="font-semibold">Yearly Visitors:</span> {yearlyVisitors}</h3>
            <Link to={`/TouristSpot/${_id}`}>
                <button className="btn btn-info"> View Details</button>
            </Link>

        </div>
    );
};

export default Spot;