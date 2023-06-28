import { Link } from 'react-router-dom';

const Auth = () => {


    return (
        <section className='initial'>
           <Link to='/login' ><button className='button'> Login</button></Link>
           <Link to='/user' ><button className='button'>Registro</button></Link>
        </section>
    );
}

export default Auth;
