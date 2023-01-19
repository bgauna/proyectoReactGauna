import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ( ) => {
  const {category} = useParams();
  const [listaCursos, setListaCursos] = useState ([
    {
        "id":"1",
        "category":"Office",
        "title":"Word",
        "description":"Curso de Word",
        "price":"1000",
        "pictureUrl":"https://apen.es/wp-content/uploads/2020/11/Microsoft-Word-Logotipo-2013-2019.jpg"
    },
    {
        "id":"2",
        "category":"Office",
        "title":"Excel",
        "description":"Curso de Excel",
        "price":"2000",
        "pictureUrl":"https://apen.es/wp-content/uploads/2020/11/logo-microsoft-excel.jpg"
    },
    {
        "id":"3",
        "category":"Office",
        "title":"PorwerPoint",
        "description":"Curso de PowerPoint",
        "price":"3000",
        "pictureUrl":"https://d500.epimg.net/cincodias/imagenes/2015/07/31/lifestyle/1438366770_570256_1438366855_noticia_normal.jpg"
    },
    {
        "id": "4",
        "category":"Office",
        "title":"Word Avanzado",
        "description":"Curso de Word Avanzado",
        "price":"1500",
        "pictureUrl":"https://apen.es/wp-content/uploads/2020/11/Microsoft-Word-Logotipo-2013-2019.jpg"
    },
    {
        "id":"5",
        "category":"Office",
        "title":"Excel Avanzado",
        "description":"Curso de Excel Avanzado",
        "price":"2500",
        "pictureUrl":"https://apen.es/wp-content/uploads/2020/11/logo-microsoft-excel.jpg"
    },
    {
        "id":"6",
        "category":"Office",
        "title":"PorwerPoint Avanzado",
        "description":"Curso de PowerPoint Avanzado",
        "price":"3500",
        "pictureUrl":"https://d500.epimg.net/cincodias/imagenes/2015/07/31/lifestyle/1438366770_570256_1438366855_noticia_normal.jpg"
    },
    {
        "id":"7",
        "category":"Coaching",
        "title":"Administración del Tiempo",
        "description":"Curso de Coaching",
        "price":"3200",
        "pictureUrl":"https://as01.epimg.net/buenavida/imagenes/2017/05/11/portada/1494527375_330342_1494527496_noticia_normal.jpg"
    },
    {
        "id":"8",
        "category":"Coaching",
        "title":"Gestión de Emociones",
        "description":"Curso de Coaching",
        "price":"4200",
        "pictureUrl":"https://www.redsistemica.com.ar/wp-content/uploads/2021/08/coaching-1.jpg"
    },
    {
        "id":"9",
        "category": "Coaching",
        "title":"Gestión de Equipos",
        "description":"Curso de Coaching",
        "price":"5200",
        "pictureUrl":"https://as01.epimg.net/buenavida/imagenes/2017/05/11/portada/1494527375_330342_1494527496_noticia_normal.jpg"
    },
    {
        "id":"10",
        "category":"Inmobiliario",
        "title":"Prospección",
        "description":"Curso de Prospección",
        "price":"6600",
        "pictureUrl":"https://media.ambito.com/p/87c3d44bcb93c30675d1c1b03a8cd0fe/adjuntos/239/imagenes/039/485/0039485275/inversiones-inmuebles-propiedades-mercado-inmobiliariojpg.jpg"
    },
    {
        "id":"11",
        "category": "Inmobiliario",
        "title":"Captación",
        "description":"Curso de Captación",
        "price":"7600",
        "pictureUrl":"https://www.clavesdigital.com.ar/vistas/fotos_columnas/339-big-data-inmobiliario-1100x687.jpg"
    },
    {
        "id":"12",
        "category":"Inmobiliario",
        "title":"Comercialización",
        "description":"Curso de Comercialización",
        "price":"8600",
        "pictureUrl":"https://statics.forbesargentina.com/2022/04/crop/626beee9c1875__400x260.webp"
    },
    {
        "id":"13",
        "category":"Inmobiliario",
        "title":"Negociación",
        "description":"Curso de Negociación",
        "price":"5600",
        "pictureUrl":"https://www.clavesdigital.com.ar/vistas/fotos_columnas/339-big-data-inmobiliario-1100x687.jpg"
    },
    {
        "id":"14",
        "category":"Inmobiliario",
        "title":"Cierre",
        "description":"Curso de Cierre",
        "price":"9600",
        "pictureUrl":"https://media.ambito.com/p/87c3d44bcb93c30675d1c1b03a8cd0fe/adjuntos/239/imagenes/039/485/0039485275/inversiones-inmuebles-propiedades-mercado-inmobiliariojpg.jpg"
    }
]);
  
  console.log(listaCursos,"una cosa", category);
  const [filtered, setFiltered] = useState([])
  
  useEffect( () => {
    !category ? setFiltered(listaCursos): setFiltered(listaCursos.filter( item => item.category===category));
    console.log(filtered," es filtered")
  }, [category])

  return (
    <div>
  
      <ItemList cursos={filtered} />

      
     
    </div>
  )
}

export default ItemListContainer;