import React, {useContext} from "react";
import './Login.css';
import {Context} from "../../index";
import firebase from "firebase/compat/app";
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

const Login = () => {
    const {auth} = useContext<any>(Context);
    const [user,setUser] = useAuthState(auth);
    const navigate = useNavigate();

    React.useEffect(() => {
        !setUser && user && navigate('/')
    }, [user,navigate,setUser]);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    }

    return (
        <div className="Login">
            <button onClick={login}>Login with Google</button>
        </div>
    );

}

export default Login;