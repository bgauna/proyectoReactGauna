import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const restar = () => { setContador(contador > 1 ? contador - 1 : contador)
        if(contador===1) console.log('No puede elegir menos productos');}

    const sumar = () => {
        setContador(contador < stock ? contador + 1 : contador)
        if (contador===stock) console.log('Ha llegado al límite de productos')}
    
    return (
        <div className='contenedorItemCount'>
            <div className='itemCount' onClick={ restar }>-</div>
            <div className='itemCount'>{contador}</div>
            <div className='itemCount' onClick={ sumar }>+</div>
            <button className='itemCount' onClick={() => { console.log(`Has agregado ${contador} elementos al carrito`) }}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount