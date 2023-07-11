import Productos from "./Componentes/Productos"
import Card from "./Componentes/Card"
import Img1 from './Imagenes/NeutraceuticoInmunapis_3.jpg'
import Img2 from './Imagenes/NeutraceuticoApicolon-sinfondo.jpg'
import Img3 from './Imagenes/PropoleoSpray_3.jpg'


export default function App(){
    
    const productos = [{
        Titulo : "Inmunapis",
        Descripcion: "Formulado científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales.",
        Precio: 6990,
        foto: Img1,
    },
    {
        Titulo : "Apicolon",
        Descripcion: "Formulado cientificamente para tratar úlceras gástricas, protegiendo su sistema digestivo de malestares provocados por H. Pylori, aliviando los reflujos, ardor estomacal y gastritis.",
        Precio: 6990,
        foto: Img2,
    },
    {
        Titulo : "Propóleo en spray",
        Descripcion: "Formulado para aliviar los dolores de garganta producidos por la tos o irritación.",
        Precio: 4000,
        foto: Img3,
    },
    {
        Titulo : "Propóleo en tintura",
        Descripcion: "Propoleo en estado puro disuelto en alcohol, sirve para hacer gárgaras ante infecciones bucales, faringeas, laringeas (amigdalitis).",
        Precio: 3500,
        foto: Img3,
    },
    {
        Titulo : "Propóleo en spray",
        Descripcion: "Formulado para aliviar los dolores de garganta producidos por la tos o irritación.",
        Precio: 4000,
        foto: Img3,
    },
    {
        Titulo : "Propóleo en tintura",
        Descripcion: "Propoleo en estado puro disuelto en alcohol, sirve para hacer gárgaras ante infecciones bucales, faringeas, laringeas (amigdalitis).",
        Precio: 3500,
        foto: Img3,
    }
    ]
    
    return (<>
 
        
        {productos.map((producto,index) => (
                <div key={index}>   <Card prod={producto}/></div>
        ))}
        
    
        
    </>)
}