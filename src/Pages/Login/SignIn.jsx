import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const SignIn = () => {
    const { loginUser } = useContext(AuthContext)

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            const user = {
                email,
                lastLoggedAt : result.user?.metadata?.lastSignInTime
            }
            console.log(user)
            fetch('https://coffee-store-server-31r0r5bee-shahria-khan-sejans-projects.vercel.app', {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="max-w-3xl mx-auto bg-[#f1f1f1] my-12 py-10 rounded-xl">
        <h1 className="text-4xl text-center font-extrabold">Please Sign In !</h1>

        <form onSubmit={handleSignIn} className="card-body">
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
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
            </div>
        </form>

    </div>
);
    
};

SignIn.propTypes = {
    
};

export default SignIn;