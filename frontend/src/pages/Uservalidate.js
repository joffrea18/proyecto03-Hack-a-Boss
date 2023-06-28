import React, { useState } from 'react';
import './usersvalidates/UserValidate.css';
import Header1 from './usersvalidates/Header1';
import Files from '../components/Files';

const Uservalidate = () => {

    const [ show, setShow ] = useState(false);

    return (
        <main>
            <Header1 />
            <button className="files" onClick={() => {setShow(!show)}}>
                🗂️ Mis archivos
            </button>
            { show && <Files />}
        </main>
    );
}

export default Uservalidate;
