import './NavBar.css';
import logoppal from '../img/logoppal.png';

import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='d-inline-flex align-items-center'>
            <img src={logoppal} alt='Logo del Ecommerce'/>
            <h1>Pildoras Empresariales</h1>
        </div>
        <div className='d-inline-flex'>
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar