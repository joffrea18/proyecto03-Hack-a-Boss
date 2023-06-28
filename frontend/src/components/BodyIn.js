import React, { useState } from 'react';
import Files from './Files';


const BodyIn = () => {

    const [ show, setShow ] = useState(false);

    return (
        <main>
            <ul>
             <li><button className="files" onClick={() => {setShow(!show)}}>
                🗂️ Mis archivos
            </button></li>
            </ul>
            { show && <Files />}
        </main>

    );
}

export default BodyIn;
