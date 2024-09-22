import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, supplier, category, chef, taste, details, photo}
        console.log(newCoffee)

        fetch('https://coffee-store-server-six-teal.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }


    return (
        <div className="hero bg-[#f1f1f1] min-h-screen">

            <div className="card bg-[#F4F3F0] w-full lg:w-1/2 shrink-0 shadow-2xl">
                <h1 className="text-5xl text-center text-[#374151] font-bold py-12">Add a Coffee</h1>
                <form onSubmit={handleAddCoffee} className="card-body">


                    <div className="flex gap-2">

                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Category" name="category" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name="chef" placeholder="Choose Chef" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered" required />
                            </div>
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>



                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#D2B48C]">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

AddCoffee.propTypes = {

};

export default AddCoffee;