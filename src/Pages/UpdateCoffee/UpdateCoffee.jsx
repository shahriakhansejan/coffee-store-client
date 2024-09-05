import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, supplier, category, chef, taste, details, photo }
        console.log(updateCoffee)

        fetch(`https://coffee-store-server-bwiq27eq3-shahria-khan-sejans-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Coffee Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }


    return (
        <div className="hero bg-[#f1f1f1] min-h-screen">

            <div className="card bg-[#F4F3F0] w-full lg:w-1/2 shrink-0 shadow-2xl">
                <h1 className="text-5xl text-center text-[#374151] font-bold py-12">Update Coffee : {name}</h1>
                <form onSubmit={handleUpdateCoffee} className="card-body">


                    <div className="flex gap-2">

                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" defaultValue={name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" placeholder="Supplier" name="supplier" defaultValue={supplier} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Category" name="category" defaultValue={category} className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name="chef" defaultValue={chef} placeholder="Choose Chef" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered" required />
                            </div>
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered" required />
                    </div>



                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#D2B48C]">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

UpdateCoffee.propTypes = {

};

export default UpdateCoffee;