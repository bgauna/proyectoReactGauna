import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  console.log(producto);
    return (
    <Link to={`/item/${producto.id}`}>
        <div key={producto.id} className="tarjeta m-5">
            <img src={producto.pictureUrl} alt={`Imagen de ${producto.id}`} />
            <h3>{producto.title}</h3>
            <h4>{producto.category}</h4>
            <p>{producto.description}</p>
            <h4>${producto.price}</h4>
        </div>
    </Link>
  )
}

export default Item