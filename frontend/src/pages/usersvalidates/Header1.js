import './Header1.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const Header1 = ( { id } ) => {
    
    const { logOut } = useContext(AuthContext);

    // const data = await getUserData({ token, id });
    // const [ useri, setUser ] = useState('');
    // console.log(user);
    
    return (
        <section>
            <ul>
                <li><h2>{`Bienvenido a tu nube: ${id}`}</h2></li>
                <li><button onClick={() => logOut()}>LogOut 👋🏻</button></li>
            </ul>
        </section>
    );
}

export default Header1;
