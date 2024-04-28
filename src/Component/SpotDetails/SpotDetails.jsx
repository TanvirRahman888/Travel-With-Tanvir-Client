import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const loadedSpot = useLoaderData()
    const { spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName} = loadedSpot
    return (
        <div>
            <div className="p-5 bg-slate-300 min-h-52 flex flex-col">
                <div className="flex justify-center items-end gap-2 mb-3 ">
                    <h3 className="text-3xl ">{spotName}, </h3>
                    <h3 className="text-3xl"> {location},</h3>
                    <h3 className="text-3xl">{countryName}</h3>
                </div>
                <img src={image} alt="Location Image" />
                <div className="flex justify-between">
                    <div className="flex items-end gap-2 mb-3">
                        <h3 className=""><span className="font-semibold">Cost: </span>{cost}</h3>
                        <h3 className=""><span className="font-semibold">Seasonality: </span>{seasonality}</h3>
                        <h3 className=""><span className="font-semibold">Time: </span>{duration} days</h3>
                    </div>
                    <div>
                        <p><span className="font-semibold">Added by : </span>{authorName}</p>
                    </div>
                </div>
                <h3 className=""><span className="font-semibold">Yearly Visitors:</span> {yearlyVisitors}</h3>
                <h3 className="">{description}</h3>

            </div>

        </div>
    );
};

export default SpotDetails;