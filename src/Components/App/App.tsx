import React, {useContext} from 'react';
import './App.css';
import Tassker from "../Tassker/Tassker";
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "../Loader/Loader";


function App() {
    const {auth} = useContext<any>(Context);
    const loading = useAuthState(auth)[1];

    if (loading) {
        return (
            <div className="App">
                <Loader/>
            </div>
        );
    } else {
        return (
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path={'/*'} element={<Tassker/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
