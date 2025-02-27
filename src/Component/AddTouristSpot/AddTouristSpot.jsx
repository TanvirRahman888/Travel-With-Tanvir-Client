import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'



const AddTouristSpot = () => {
    useEffect(()=>{
        document.title="Travel with Tanvir | Add Tourist Spot"
    },[])
    const { user, setLoading, } = useContext(AuthContext)
    
    const handelAddSpot = e => {
        setLoading(false)
        e.preventDefault();
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

        const newSpot = { spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName, authorEmail }
        console.log(newSpot, "Object");

        Swal.fire({
            title: "Do you add this spot?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Add",
            denyButtonText: `Don't add`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch('https://travel-with-tanvir-server.vercel.app/TouristSpot', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newSpot)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire("Spot Added!", "", "success");
                            form.reset();
                        } else {
                            Swal.fire("Spot isn't Added", "", "info");
                        }

                    })

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    return (
        <div className="bg-blue-100 p-5 rounded-xl my-5">
            <h1 className="text-center text-2xl font-bold">Add a Tourist Spot</h1>
            <section className="p-6">
                <form onSubmit={handelAddSpot} className="grid grid-cols-2 gap-4">
                    <div >
                        <label className="block text-lg text-black font-medium">Spot Name</label>
                        <div className="flex">
                            <input type="text" name="SpotName" required placeholder="Spot Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Country Name</label>
                        <div className="flex">
                            <input type="text" name="CountryName" required placeholder="Country Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Location</label>
                        <div className="flex">
                            <input type="text" name="Location" required placeholder="Location" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Average Cost</label>
                        <div className="flex">
                            <input type="number" name="AverageCost" required placeholder="Average Cost" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Image</label>
                        <div className="flex">
                            <input type="text" name="Image" required placeholder="Image URL" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Seasonality</label>
                        <div className="flex">
                            <input type="text" name="Seasonality" required placeholder="Summer, Winter, etc
                            " className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-lg text-black font-medium">Description</label>
                        <div className="flex">
                            {/* <input type="text" name="Description" placeholder="Description" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" /> */}
                            <textarea className="border sm:text-sm rounded-md focus:ring-inset w-full min-h-80" name="Description" required placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Duration</label>
                        <div className="flex">
                            <input type="number" name="Duration" required placeholder="4, 5, 6... days" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Yearly Visitors</label>
                        <div className="flex">
                            <input type="number" name="YearlyVisitors" required placeholder="100,000 visitors" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Author Name</label>
                        <div className="flex">
                            <input type="text" disabled defaultValue={user.displayName} required placeholder="Author Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Author Email</label>
                        <div className="flex">
                            <input type="text" disabled defaultValue={user.email} required placeholder="Author Email" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <button className="text-xl btn col-span-2 btn-success">Add Spot</button>

                </form>
            </section>
        </div>
    );
};

export default AddTouristSpot;