import React, {useContext} from "react";
import './Navbar.css';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

function Navbar() {

    const {auth} = useContext<any>(Context);
    const [user] = useAuthState(auth);

    if(user) {
        return (
            <div className="Navbar" onClick = {()=>auth.signOut()}>
                <button>Exit</button>
            </div>
        );
    }
    else{
        return (
            <div className="Navbar">
                <button disabled={true}>Login</button>
            </div>
        );
    }
}

export default Navbar;