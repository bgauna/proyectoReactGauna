//Aún lo estoy probando, no sé cómo hacerlo funcionar todavía
import './ElementosDeLista.css';

const ElementosDeLista = ({props}) => {
    let menuHTML=`<ul class='d-flex align-items-center decoration-none'>`;
    console.log(props, props.menues);
    props.menues.forEach(e => {
        menuHTML += `<li class='p-2'>${e}</li>`
    });
    menuHTML +=`</ul>`;
    console.log(menuHTML);
  return (
    <div>
        {menuHTML}
    </div>
  )
}

export default ElementosDeLista