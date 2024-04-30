import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {

    useEffect(()=>{
        document.title="Travel with Tanvir | Details"
    },[])

    const loadedSpot = useLoaderData()
    const { spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName } = loadedSpot
    return (

        <div className="p-5 bg-blue-100 rounded-2xl my-5 min-h-52 flex flex-col md:flex-row gap-3">
            <div className="md:w-1/2 w-full">
                <img src={image} alt="Location Image" />
                <div>
                    <p><span className="font-semibold">Added by : </span>{authorName}</p>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <div className="flex gap-2 mb-3 break-before-page">
                    <h3 className="text-3xl ">{spotName}, </h3>
                    <h3 className="text-3xl"> {location},</h3>
                    <h3 className="text-3xl">{countryName}</h3>
                </div>
                <div className="">
                    <h3 className=""><span className="font-semibold">Cost: </span>{cost}</h3>
                    <h3 className=""><span className="font-semibold">Duration: </span>{duration} days</h3>
                    <h3 className=""><span className="font-semibold">Seasonality: </span>{seasonality}</h3>
                    <h3 className=""><span className="font-semibold">Yearly Visitors:</span> {yearlyVisitors}</h3>
                    <h3 className=""><span className="font-semibold"> Description: </span>{description}</h3>
                </div>

            </div>

        </div>

    );
};

export default SpotDetails;