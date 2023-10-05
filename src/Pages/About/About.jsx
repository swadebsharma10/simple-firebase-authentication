import { GithubAuthProvider, getAuth, signInWithPopup, signOut, } from "firebase/auth";
import { useState } from "react";
import app from "../../Firebase/firebase.init";

const About = () => {

    const[user, setUser] = useState(null);

    const auth = getAuth(app);
    const gitProvider = new GithubAuthProvider()

    const handleGithubSignIn =()=>{
        signInWithPopup(auth, gitProvider)
        .then(result =>{
            const loggedUser = result.user;
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const handleGithubSignOut =()=>{
        signOut(auth)
        .then((result)=>{
            console.log(result)
            setUser('');
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <section className="mt-28">
        { user && 
            <div className="">
            <div className=""><img className="w-40 h-48 rounded-lg" src={user.photoURL} alt="" /></div>
            <h3 className="text-2xl font-bold">Name: {user.displayName}</h3>
          </div>
         } 
          <div className="text-center">
          <h3 className="text-2xl py-4">Github SignIn</h3>
          {user ?
            <button onClick={handleGithubSignOut} className="btn btn-outline btn-primary"> Github Out</button>
            :
          <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary">Github In</button>
        }
          </div>
        </section>
    );
};

export default About;