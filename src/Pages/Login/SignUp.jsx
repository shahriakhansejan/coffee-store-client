import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        createUser(email, password)
        .then(result => {
            const createdTime = result.user?.metadata?.creationTime;
            const user = { email, createdTime }

            fetch('https://coffee-store-server-six-teal.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then( data =>{
                console.log(data)
            })

            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="max-w-3xl mx-auto bg-[#f1f1f1] my-12 py-10 rounded-xl">
            <h1 className="text-4xl text-center font-extrabold">Sign Up Now !</h1>

            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>

        </div>
    );
};

SignUp.propTypes = {

};

export default SignUp;