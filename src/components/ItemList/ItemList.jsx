import Item from "../Item/Item";

const ItemList = ({cursos}) => {

  
  
    return (
    <div className="d-flex flex-wrap">
        {cursos.map( (e) => (
            <Item producto={e} />
        ))}
    </div>
  )
}

export default ItemList