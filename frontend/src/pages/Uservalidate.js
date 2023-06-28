import React, { useContext } from 'react';
import './usersvalidates/UserValidate.css';
import Header1 from './usersvalidates/Header1';
import { AuthContext } from '../context/AuthContext';
import BodyIn from '../components/BodyIn';
import { useParams } from 'react-router-dom';

const Uservalidate = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const { email } = useParams();

    return (
        <>
        <Header1 id={id} email={email}/>
        <BodyIn />
        </>
    );
}

export default Uservalidate;
