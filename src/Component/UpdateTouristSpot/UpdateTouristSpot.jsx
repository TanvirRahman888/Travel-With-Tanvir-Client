import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";

const UpdateTouristSpot = () => {
    const { user, setLoading, } = useContext(AuthContext)
    const spot=useLoaderData();
    const {_id,spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName, authorEmail}=spot;


    const handelUpdateSpot=(e)=>{
        e.preventDefault();
        setLoading(false)

        const form = e.target;
        const spotName = form.SpotName.value;
        const countryName = form.CountryName.value;
        const location = form.Location.value;
        const cost = form.AverageCost.value;
        const image = form.Image.value;
        const seasonality = form.Seasonality.value;
        const description = form.Description.value;
        const duration = form.Duration.value;
        const yearlyVisitors = form.YearlyVisitors.value;
        const authorName = user.displayName;
        const authorEmail = user.email;
        console.log(spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName, authorEmail);

        const updateSpot = { spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName, authorEmail }
        console.log(updateSpot, "Object");

        Swal.fire({
            title: "Do you update this spot?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Add",
            denyButtonText: `Don't add`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/TouristSpot/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateSpot)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.matchedCount) {
                            Swal.fire("Spot Updated!", "", "success");
                        } else {
                            Swal.fire("Spot isn't Updated", "", "info");
                        }

                    })

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

    }
    return (
        <div>
            <h3>UpdateTouristSpot {spotName}</h3>
            {/* -------------------- */}
            <form onSubmit={handelUpdateSpot} className="grid grid-cols-2 gap-4">
                    <div >
                        <label className="block text-lg text-black font-medium">Spot Name</label>
                        <div className="flex">
                            <input type="text" name="SpotName" defaultValue={spotName} required placeholder="Spot Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Country Name</label>
                        <div className="flex">
                            <input type="text" name="CountryName" defaultValue={countryName} required placeholder="Country Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Location</label>
                        <div className="flex">
                            <input type="text" name="Location" defaultValue={location} required placeholder="Location" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Average Cost</label>
                        <div className="flex">
                            <input type="text" name="AverageCost" defaultValue={cost} required placeholder="Average Cost" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Image</label>
                        <div className="flex">
                            <input type="text" name="Image" defaultValue={image} required placeholder="Image URL" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Seasonality</label>
                        <div className="flex">
                            <input type="text" name="Seasonality" defaultValue={seasonality} required placeholder="Summer, Winter, etc
                            " className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-lg text-black font-medium">Description</label>
                        <div className="flex">
                            {/* <input type="text" name="Description" placeholder="Description" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" /> */}
                            <textarea className="border sm:text-sm rounded-md focus:ring-inset w-full min-h-80" name="Description" defaultValue={description} required placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Duration</label>
                        <div className="flex">
                            <input type="number" name="Duration" defaultValue={duration} required placeholder="4, 5, 6... days" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Yearly Visitors</label>
                        <div className="flex">
                            <input type="number" name="YearlyVisitors" defaultValue={yearlyVisitors} required placeholder="4, 5, 6... visitors" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Author Name</label>
                        <div className="flex">
                            <input type="text" name="YearlyVisitors" defaultValue={authorName} required placeholder="Author Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Author Email</label>
                        <div className="flex">
                            <input type="text" name="YearlyVisitors" defaultValue={authorEmail} required placeholder="Author Email" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <button className="text-xl btn col-span-2 btn-success">Update Spot</button>

                </form>

        </div>
    );
};

export default UpdateTouristSpot;