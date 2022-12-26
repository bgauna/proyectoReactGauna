import './CartWidget.css';

const CartWidget = () => {
  const medidas=30;
  const medidasNro={
    width:medidas,
    height:medidas,
    };

  return (
    <div className='carrito reset d-flex justify-content-center align-items-center p-2'>
        <i className="fa-solid fa-cart-arrow-down fa-2x iconoCarrito reset"></i>
        <div className='nroCarrito reset d-flex justify-content-center align-items-center' style={medidasNro}><p className='textoCarrito reset'>4</p></div>
    </div>
  )
}

export default CartWidget