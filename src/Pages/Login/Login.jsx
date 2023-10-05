import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../Firebase/firebase.init";


const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
            console.log('google user', loggedInUser)
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const handleGoogleSignOut =() =>{
        signOut(auth)
        .then((result)=>{
            console.log(result)
            setUser(null);
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div className="h-[70vh] flex justify-center items-center">
          <div className="">
    {  user &&  
        <div className="mb-10">
        <img className="w-28 h-28 rounded-full" src={user.photoURL} alt="" />
        <h3 className="text-xl font-bold">Name: {user.displayName}</h3>
        <h3 className="text-xl font-bold">Email: {user.email}</h3>
        
        </div>
    }
           
        { user ?
            <button onClick={handleGoogleSignOut} className="btn btn-xs bg-orange-500 sm:btn-sm md:btn-md lg:btn-lg">SignOut Google</button>
        :
          
          <button onClick={handleGoogleSignIn} className="btn btn-xs bg-orange-500 sm:btn-sm md:btn-md lg:btn-lg"> Login Google </button>
        
        }
          </div>
        </div>
    );
};

export default Login;