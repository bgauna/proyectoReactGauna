import './CartWidget.css';

const CartWidget = () => {
  const cantProductos=100;
  let cantCarrito=0;
  let medidas = 0;
  const medidasNro={};
  if(cantProductos<100) {
    medidas=45;
    cantCarrito=cantProductos;
    medidasNro.width=medidas;
    medidasNro.height=medidas;
  } else {
    medidas=45;
    cantCarrito='+99';
    medidasNro.width=medidas*1.4;
    medidasNro.height=medidas;
  }

  return (
    <div className='carrito reset d-flex justify-content-center align-items-center p-3'>
        <i className="fa-solid fa-cart-arrow-down fa-3x iconoCarrito reset"></i>
        <div className='nroCarrito reset d-flex justify-content-center align-items-center' style={medidasNro}><p className='textoCarrito reset align-self-center pb-1'>{cantCarrito}</p></div>
    </div>
  )
}

export default CartWidget