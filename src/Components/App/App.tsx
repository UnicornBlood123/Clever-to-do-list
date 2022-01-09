import React, { useContext } from 'react';
import './App.css';
import Tassker from '../Tassker/Tassker';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../Loader/Loader';
import Login from '../Login/Login';
import { Paths } from '../../contents/routes';

const App = () => {
  const { auth } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    !setUser && !user && navigate(Paths.LOGIN);
  }, [user, navigate, setUser]);

  return (
    <div className="App">
      {setUser ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route path={Paths.OTHER} element={<Tassker />} />
            <Route path={Paths.LOGIN} element={<Login />} />
          </Routes>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
