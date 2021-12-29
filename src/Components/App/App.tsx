import React, {useContext} from 'react';
import './App.css';
import Tassker from "../Tassker/Tassker";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "../Loader/Loader";
import Login from "../Login/Login";


const App = () =>  {
    const {auth} = useContext<any>(Context);
    const [user,setUser] = useAuthState(auth);
    const navigate = useNavigate();

    React.useEffect(() => {
        !setUser && !user && navigate('login')
    }, [user,navigate,setUser]);

    if (setUser) {
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
                    <Route path={'login'} element={<Login/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
