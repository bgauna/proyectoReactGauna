import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Tarjeta.css';
import imagen from '../img/tableros.png';

const Tarjeta = ({item}) => {
  console.log(item);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title className='textoNegro'>{item.titulo}</Card.Title>
        <Card.Text className='textoNegro'>
          {item.texto}
        </Card.Text>
        <Button variant="primary">Agregar</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;