import { Link } from "react-router-dom";

const Spot = ({ spot }) => {
    const { spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName, authorEmail, _id } = spot;
    console.log(_id);
    return (
        <div className="flex flex-col gap-2 p-5 bg-slate-300 min-h-52">
            <h3 className="text-lg font-bold mb-3">
                {spotName}, {location}, {countryName}
            </h3>
            <img src={image} alt="Location Image" className="flex-grow" />
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