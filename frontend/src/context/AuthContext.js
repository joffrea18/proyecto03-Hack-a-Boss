import { createContext, useEffect, useState } from 'react';
import { getUserData } from '../services';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProviderContext = ({ children }) => {

    // aquí pasamos todo el token por el árbol de componentes para poder utilizarlo en cualquier otro componente.
    // también validamos que si hay token se mantenga login, si no se desconecte.

    const navigate = useNavigate();
    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [ id, setId ] = useState(localStorage.getItem('id'));
    const [ email, setEmail] = useState(localStorage.getItem('email'));
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    useEffect(() => {
        localStorage.setItem('id', id);
    }, [id]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    // console.log(user);

    useEffect(() => {

        const getMyUserData = async () => {
            try {
                const info = await getUserData({ token, id });
                setUser(info);
            } catch (error) {
                logOut()
            }
        }

        if(token && id) getMyUserData()

    }, [token, id]);

    console.log(user);

    const login = (token) => {
        setToken(token);
    }

    const logOut = () => {
        setToken('');
        setUser(null);
        setId('');
        navigate('/');
    }

    return (
    <AuthContext.Provider value={{ token, user, id, login, logOut, email }} >{children}
        </AuthContext.Provider>
    );
}

export default AuthProviderContext;
