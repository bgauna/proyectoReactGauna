import './NavBar.css';
import logoppal from '../img/logoppal.png';
/* import ElementosDeLista from './ElementosDeLista'; */
import CartWidget from './CartWidget';

const NavBar = () => {
/*   const menues = ['Login','Cursos']; */
//Estoy haciendo una prueba, pero como no me salió, dejo comentado
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='d-inline-flex align-items-center'>
            <img src={logoppal} alt='Logo del Ecommerce'/>
            <h1>Pildoras Empresariales</h1>
        </div>
        <nav className='d-inline-flex'>
          <ul className='d-flex align-items-center decoration-none'>
            <li className='p-2'>Login</li>
            <li className='p-2'>Cursos</li>
          </ul>
            {/* <ElementosDeLista props={{menues}}/> */}
            <CartWidget />
        </nav>
    </div>
  )
}

export default NavBar