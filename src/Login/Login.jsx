import { Link,  useNavigate } from "react-router-dom";
import './Login.css'
import { useContext } from "react";
import { Authcontext } from "../AuthProviders/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase-config";
import toast from "react-hot-toast";
const Login = () => {
    const { loginWithEmail }=useContext(Authcontext);
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleLog = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmail(email,password)
            .then(result=>{
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate('/');
                })
    }



    const googleHandler = ()=>{
        signInWithPopup(auth,GoogleProvider)
        .then(result=>{
            const logIn = result.user;
            console.log(logIn)
            navigate('/');
            return toast.success('Logged in Successfully!');
        })
        // return Swal.fire({
        //     title: 'successfully logged in',
        //     icon: 'success',
        //     toast: true,
        //     position: 'top-end',
        //     showConfirmButton: false,
        //     timer: 3000
        // });

        .catch(error=>{
            console.error(error)
        })
    }

    return (
       <div className="loginpage">
         <div className=" mx-auto max-w-md border  border-gray-200 rounded-lg shadow-lg p-6 bg-white  hover:shadow-xl  ">
        <div className="flex flex-col p-6 space-y-1">
            <h3 className="tracking-tight text-2xl font-bold text-gray-900 ">Please Login</h3>
            <p className="text-sm text-gray-500 ">Please fill in the form to Login your account.</p>
        </div>
        {/* Form Inner content */}
        <div className="p-6">
            <form onSubmit={handleLog} className="space-y-4">
                
                    
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="email">
                        Email
                    </label>
                    <input  className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md" id="email" placeholder="Enter your email" name="email" type="email"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="message">
                        Password
                    </label>
                    <input  className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md" id="" placeholder="Enter Your Password" name="password" type="password"
                    />
                </div>
                {/* Submit button */}
                <button className="px-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">Register</button>

               
            </form>


            <div className="flex items-center pt-4 space-x-1">
    <div className="flex-1 h-px bg-slate-300 sm:w-16 dark:bg-gray-700"></div>
    <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
    <div className="flex-1 h-px bg-slate-300 sm:w-16 dark:bg-gray-700"></div>
</div>

                <div className="flex justify-center space-x-4">
    <button onClick={googleHandler} aria-label="Log in with Google" className="p-3 rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
    </button>
    <button aria-label="Log in with Twitter" className="p-3 rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path></svg>
    </button>
    
</div>
<p className="text-xs text-center sm:px-6 dark:text-gray-400">
    Don't have an account? Please
    <Link to={"/register"}  rel="noopener noreferrer" href="#" className="underline dark:text-gray-700 ml-2 ">
       Register
    </Link >
</p>
        </div>
    </div>
       </div>
    );
};

export default Login;