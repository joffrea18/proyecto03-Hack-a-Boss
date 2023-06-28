import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Auth from './components/Auth';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import NotFound from './pages/NotFound';
import Uservalidate from './pages/Uservalidate';
import { useEffect, useState } from 'react';
import Loading from './Loading/Loading';
import React from "react";

export const userContext = React.createContext();

function App() {

  const [ id, setId ] = useState(localStorage.getItem('id'));
  const [ user, setUser ] = useState(id)
  console.log(id, user);

  useEffect(() => {
    localStorage.setItem('id', id);
}, [id]);

  // const [ id, setId ] = useState();
  // console.log(id);
  // esto me da undefined

  return (
    <>
    <userContext.Provider value={user} >
        <main>
          <Header />
              <Routes >
                <Route path='/' element={<Auth />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/loading' element={<Loading />} />
                <Route path={'/loginuser'} element={<Uservalidate />} />
                <Route path='/user' element={<UserPage />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
        </main>
      </userContext.Provider>
      <Footer />
      </>
  );
}

export default App;
