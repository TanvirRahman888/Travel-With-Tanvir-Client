import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Spot from "../Spot/Spot";


const TouristSpot = () => {
    useEffect(()=>{
        document.title="Travel with Tanvir | Tourist Spot"
    },[])

    const { setLoading } = useContext(AuthContext);
    setLoading(false)
    const allSpot = useLoaderData();
    return (
        <div className="bg-blue-100 rounded-2xl my-6">
            <div className="flex items-center justify-center gap-5 p-5">
                <h1 className="text-center text-3xl font-bold">All Tourist Spot {allSpot.length}</h1>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-info m-1">Sort by</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button className="btn btn-info mb-4">Cost High to Low</button></li>
                        <li><button className="btn btn-info">Cost Low to High</button></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between  gap-4 p-5 rounded-xl">
                {
                    allSpot.map(spot => <Spot key={spot._id} spot={spot}></Spot>)

                }
            </div>
        </div>
    );
};

export default TouristSpot;