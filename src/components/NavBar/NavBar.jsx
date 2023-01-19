import './NavBar.css';
/* import ElementosDeLista from './ElementosDeLista'; */
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
/*   const menues = ['Login','Cursos']; */
//Estoy haciendo una prueba, pero como no me salió, dejo comentado
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='d-inline-flex align-items-center'>
            <Link to='/'><img src='./img/logoppal.png' alt='Logo del Ecommerce'/></Link>
            <h1>Pildoras Empresariales</h1>
        </div>
        <nav className='d-inline-flex'>
          <ul className='d-flex align-items-center decoration-none'>
            <NavLink to='/' className={ ({isActive})=> isActive ? "active" : "inactive" }>Todo</NavLink>
            <NavLink to='/category/Office' className={ ({isActive})=> isActive ? "active" : "inactive" }>Office</NavLink>
            <NavLink to='/category/Coaching' className={ ({isActive})=> isActive ? "active" : "inactive" }>Coaching</NavLink>
            <NavLink to='/category/Inmobiliario' className={ ({isActive})=> isActive ? "active" : "inactive" }>Inmobiliario</NavLink>
          </ul>
            {/* <ElementosDeLista props={{menues}}/> */}
            <CartWidget />
        </nav>
    </div>
  )
}

export default NavBar