import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TopAttractions = () => {
    const [loading, setLoading] = useState(true)

    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/TouristSpot')
            .then(res => res.json())
            .then(data => {
                setAttractions(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="flex items-center justify-center gap-3 min-h-44 mx-auto w-full">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    return (
        <div className="bg-blue-100 rounded-2xl my-6 p-5">
            <h1 className="text-5xl text-center font-bold m-5">Popular Attractions</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-5">
                {
                    attractions.slice(0, 6).map(attraction =>
                        <Link to={`/TouristSpot/${attraction._id}`} key={attraction._id}>
                            <div className="flex flex-col justify-center items-center rounded-xl p-3 bg-gray-100 bg-cover h-72" style={{
                                backgroundImage: `url(${attraction.image})`
                            }}>
                                <h3 className="text-4xl text-center font-extrabold text-white">{attraction.spotName}</h3>
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className="flex justify-center m-5">
                <Link to={'/TouristSpot'}><button className="btn btn-success w-40 text-xl text-white hover:text-blue-800">All Spot</button></Link>
            </div>

        </div>
    );
};

export default TopAttractions;