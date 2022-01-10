import React, { useContext } from 'react';
import './Navbar.css';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const { auth } = useContext<any>(Context);
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      {user ? (
        <button onClick={() => auth.signOut()}>Exit</button>
      ) : (
        <button disabled={true}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
