import React, {useContext} from "react";
import './Login.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Tassker from "../Tassker/Tassker";
import {Context} from "../../index";
import firebase from "firebase/compat/app";

function Login() {
    const {auth} = useContext<any>(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }

    return (
        <div className="Login">
            <button onClick={login}>Login with Google</button>
        </div>
    );

}

export default Login;