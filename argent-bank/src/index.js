import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SigninPage from './pages/SigninPage';
import User from './pages/User';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<App /> } />
            <Route path='/SigninPage' element={<SigninPage/>} />
            <Route path='/User' element={<User/>} />
          </Route>
        </Routes>
      </BrowserRouter>
 </React.StrictMode>   
);

