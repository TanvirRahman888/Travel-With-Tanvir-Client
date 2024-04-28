
import { useLoaderData } from "react-router-dom";


const MyList = () => {
    const myList = useLoaderData()
    
    return (
        <div>
            <p className="text-center text-2xl">MyList : {myList.length}</p>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="bg-blue-500 text-lg">
                                <th className="p-3">Serial</th>
                                <th className="p-3">Spot Name</th>
                                <th className="p-3">Country</th>
                                <th className="p-3">Yearly Visitors</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-b bg-gray-200 text-lg text-black border-gray-700">
                            <tr>
                                <td className="px-3 ">A</td>
                                <td className="px-3 py-2">
                                    <p>Dwight Adams</p>
                                </td>
                                <td className="px-3 py-2">
                                <p className="">Spirit Media</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-873-9812</p>
                                </td>
                                <td className="px-3 py-2 flex gap-2">
                                    <button className="btn">View</button>
                                    <button className="btn">Edit</button>
                                    <button className="btn">Delete</button>
                                </td>
                            </tr>                            
                        </tbody>
                        {
                            myList.map((spot, idx)=><tbody key={idx} className="border-b bg-gray-200 text-lg text-black border-gray-700">
                            <tr>
                                <td className="px-3 ">{idx+1}</td>
                                <td className="px-3 py-2">
                                    <p>{spot.spotName}</p>
                                </td>
                                <td className="px-3 py-2">
                                <p className="">{spot.countryName}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{spot.yearlyVisitors}</p>
                                </td>
                                <td className="px-3 py-2 flex gap-2">
                                    <button className="btn">View</button>
                                    <button className="btn">Edit</button>
                                    <button className="btn">Delete</button>
                                </td>
                            </tr>                            
                        </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;