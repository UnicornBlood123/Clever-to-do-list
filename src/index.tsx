import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyD1LL-_FxFQrMkG3mzAYv1A6sTwx4XTPPg',
  authDomain: 'tassker-react.firebaseapp.com',
  projectId: 'tassker-react',
  storageBucket: 'tassker-react.appspot.com',
  messagingSenderId: '260464475138',
  appId: '1:260464475138:web:69f0da30c5c183fad9bb1b',
  measurementId: 'G-GJMS9ZM338',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={
        {
          firebase,
          auth,
          firestore,
        } as any
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
