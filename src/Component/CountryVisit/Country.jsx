import { Link, useLoaderData } from "react-router-dom";



const Country = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div>
            <h1 className="text-xl">country</h1>
            <Link to={'#'}>
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Bangladesh" /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title">Bangladesh</h2>
                    </div>
                </div>
                </Link>
        </div>
    );
};

export default Country;