import "./Style.css"
import CardTitle from "./CardTitle"
import CardPrecio from "./CardPrecio"
import CardDescripcion from "./CardDescripcion"


export default function Card({prod}) {
    
    return(<>
    <div class="container_prod">
        <div class="carta_prod">
            <h5 class="titulo_item"><CardTitle Titulo={prod.Titulo}/> </h5>
            <img class="img_item"  src={prod.foto} />
            <div class="capa">
                <h5><CardTitle Titulo={prod.Titulo}/> </h5>
                <p> <CardDescripcion Descripcion={prod.Descripcion}/></p>
                <button variant="primary">Agregar al carro</button>
            </div>
            <h5 class="precio_item"> <CardPrecio Precio= {prod.Precio}/></h5>
        </div>
    </div>
    </>)
}