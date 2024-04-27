import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddTouristSpot = () => {
    const{user}=useContext(AuthContext)

    const handelAddSpot=e=>{
        e.preventDefault();
        const spotName=e.target.SpotName.value; 
        const countryName=e.target.CountryName.value; 
        const location=e.target.Location.value; 
        const cost=e.target.AverageCost.value; 
        const image=e.target.Image.value; 
        const seasonality=e.target.Seasonality.value; 
        const description=e.target.Description.value; 
        const duration=e.target.Duration.value;
        const yearlyVisitors=e.target.YearlyVisitors.value;
        const authorName=user.displayName; 
        const authorEmail=user.email; 
        console.log(spotName, countryName, location, cost, image, seasonality, description, duration, yearlyVisitors, authorName, authorEmail);
    }
    return (
        <div>
            <h1>Add Tourist Spot</h1>
            <section className="p-6">
                <form onSubmit={handelAddSpot} className="grid grid-cols-2 gap-4">
                    <div >
                        <label className="block text-lg text-black font-medium">Spot Name</label>
                        <div className="flex">
                            <input type="text" name="SpotName" placeholder="Spot Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Country Name</label>
                        <div className="flex">
                            <input type="text" name="CountryName" placeholder="Country Name" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Location</label>
                        <div className="flex">
                            <input type="text" name="Location" placeholder="Location" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Average Cost</label>
                        <div className="flex">
                            <input type="text" name="AverageCost" placeholder="Average Cost" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Image</label>
                        <div className="flex">
                            <input type="text" name="Image" placeholder="Image URL" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Seasonality</label>
                        <div className="flex">
                            <input type="text" name="Seasonality" placeholder="Summer, Winter, etc
                            " className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-lg text-black font-medium">Description</label>
                        <div className="flex">
                            {/* <input type="text" name="Description" placeholder="Description" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" /> */}
                            <textarea className="border sm:text-sm rounded-md focus:ring-inset w-full" name="Description" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Duration</label>
                        <div className="flex">
                            <input type="number" name="Duration" placeholder="4, 5, 6... days" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                            <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-300">Days</span>                            
                        </div>
                    </div>
                    <div >
                        <label className="block text-lg text-black font-medium">Yearly Visitors</label>
                        <div className="flex">
                            <input type="number" name="YearlyVisitors" placeholder="4, 5, 6... visitors" className="flex flex-1 border sm:text-sm rounded-md focus:ring-inset" />
                            <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-300">Visitors</span>                         
                        </div>
                    </div>
                    <button className="btn col-span-2 btn-success">Add Spot</button>

                </form>
            </section>
        </div>
    );
};

export default AddTouristSpot;