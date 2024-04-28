
import { useLoaderData } from "react-router-dom";
import MySpot from "./MySpot";


const MyList = () => {
    const myList = useLoaderData()



    return (
        <div>
            <p className="text-center text-2xl">MyList : {myList.length}</p>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-left">
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

                        {
                            myList.map((spot, idx) => <MySpot key={idx} spot={spot} idx={idx}></MySpot>
                            )
                        }
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;