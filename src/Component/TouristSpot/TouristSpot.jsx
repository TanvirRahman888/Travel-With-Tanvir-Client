import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Spot from "../Spot/Spot";


const TouristSpot = () => {

    const { setLoading } = useContext(AuthContext);
    setLoading(false)
    const allSpot = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Tourist Spot {allSpot.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between bg-blue-100 gap-4 p-5 rounded-xl">
                {
                    allSpot.map((spot, idx) => <Spot key={idx} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default TouristSpot;