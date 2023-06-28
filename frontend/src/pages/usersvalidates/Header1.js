import './Header1.css';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header1 = () => {

    const [ id, setId ] = useState(localStorage.getItem('id'));
    const [ user, setUser ] = useState(id);
    const [ error, setError ] = useState('');
    const { login } = useContext(AuthContext);
    console.log(user);
    console.log(id);

    try {
        useEffect(() => {
            localStorage.setItem('id', id);
        }, [id]);

        login(id)
        console.log(id);

    } catch (error) {
        setError(error.message)
    }

    const setLogOut = () => {
        if (!user) {
            setUser(null)
        } 
    }

    
    return (
        <section>
            <ul>
                <li><h2>{`Bienvenido a tu nube: ${id}`}</h2></li>
                <li><Link to='/'><button onClick={() => {setLogOut(setUser)}}>LogOut 👋🏻</button></Link></li>
            </ul>
        </section>
    );
}

export default Header1;
