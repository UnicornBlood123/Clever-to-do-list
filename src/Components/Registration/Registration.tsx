import React, { useContext, useState } from 'react';
import './Registration.css';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Paths } from '../../contents/routes';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Registration = () => {
  const { auth } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    !setUser && user && navigate(Paths.ROOT);
  }, [user, navigate, setUser]);

  const register = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then()
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="registration">
      <p>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={email}
        />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <br />
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={password}
        />
      </p>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Registration;
