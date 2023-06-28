import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserData, loginService, loginServiceId } from '../services';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {

  const navigate = useNavigate();
  const [ email, setEmail] = useState();
  const [ password, setPassword] = useState();
  const [ error, setError ] = useState();
  const { login } = useContext(AuthContext);
  // const [ user , setUser ] = useContext(AuthContext);

  const handleForm  = async (e) => {
    e.preventDefault();
    setError('')


    try {
      const token = await loginService({email, password});
      const id = await loginServiceId({email, password});
      const data = await getUserData({ token, id });
      // setUser(data)
      // console.log(user);

      login(token, id)
      console.log(data.name);
      navigate(`/login/${id}`);
      if (!token) navigate(`/login`);
    } catch (error) {
      setError(error.message)
    }
  }

  
 return (
        <>
        <form onSubmit={handleForm}>
          <fieldset>
        <h2>Inicia sesión</h2>
            <label>
              <input
              name="email"
              type="email"
              required
              placeholder='Email*'
              onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <input
              name="password"
              type="password"
              required
              placeholder='Password*'
              onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className='button'>Login</button>
            <p>
              Todavía no tienes cuenta?
              <Link to="/user">Regístrate</Link>
            </p>
          </fieldset>
          { error ? <p>{error}</p> : null }
        </form>
        </>
    );
}

export default LoginPage;
