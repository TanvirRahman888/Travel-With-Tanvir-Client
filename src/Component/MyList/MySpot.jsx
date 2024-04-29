import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const MySpot = ({ spot,myList, setMyList, idx }) => {
    const handelDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
               
                fetch(`http://localhost:5000/TouristSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = myList.filter(mL => mL._id != _id);
                            setMyList(remaining);
                        }
                    })
            }
        });
    }

    const { _id, spotName, cost, countryName, yearlyVisitors } = spot;
    return (
        <tbody className="border-b bg-gray-200 text-lg text-black border-gray-700">

            <tr>
                <td className="px-3 ">{idx + 1}</td>
                <td className="px-3 py-2">
                    <p>{spotName}</p>
                </td>
                <td className="px-3 py-2">
                    <p>{cost}</p>
                </td>
                <td className="px-3 py-2">
                    <p className="">{countryName}</p>
                </td>
                <td className="px-3 py-2">
                    <p>{yearlyVisitors}</p>
                </td>
                <td className="px-3 py-2 flex gap-2">
                    <Link to={`/TouristSpot/${_id}`}><button className="btn btn-success">View</button></Link>
                    <Link to={`/updateSpot/${_id}`}><button className="btn btn-info">Edit</button></Link>

                    <button onClick={() => handelDelete(_id)} className="btn btn-error">Delete</button>
                </td>
            </tr>
        </tbody>
    );
};

export default MySpot;