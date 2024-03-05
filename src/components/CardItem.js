import Image from "./Image";
import Description from "./Description";
import ButtonDetalle from "./ButtonDetalle";
import ButtonAddCart from "./ButtonAddCart";
import "./styles/cardItem.css";

function CardItem (props){
    return(
        <div className="cardItems">
            <Image imagen={props.imagen}/>
            <Description    
                        title={props.title}
                        cantidad = {props.cantidad}
                        precio = {props.precio}
                        />

            <div className="buttons">   
                <ButtonDetalle/>
                <ButtonAddCart/>
            </div>
        </div>
    )
}

export default CardItem;