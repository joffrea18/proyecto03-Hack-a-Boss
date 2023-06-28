import { Link } from 'react-router-dom'
import './Loading.css'

const Loading = ({ className, ...others }) => {

  // navigate('/login');

  return (
    <>
    <h1>Usuario registrado con éxito</h1>
    <Link to='/login' ><button>Inica sesión aquí</button></Link>
    </>
  )
   
    
  
}


export default Loading
