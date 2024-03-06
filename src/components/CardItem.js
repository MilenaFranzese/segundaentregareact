import Image from "./Image";
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import "./styles/cardItem.css";
import { Link } from "react-router-dom";
import cart from "./img/carritosuma.png";

const CardItem = (props) => {
    return(
        <div className="cardItems">
            <Image 
                imagen={props.imagen}
                />
            <Description 
                title= {props.title}
                cantidad = {props.cantidad}
                precio={props.precio}
                />
            <div className="buttons">
                <Link to={ `/item/${props.id}`}>
                    <ButtonDetalles 
                        txt="Ver detalles" 
                    />
                </Link>

                <ButtonAddCart 
                    id={props.id}
                    svg={cart}
                />
            </div>
        </div>
    )
}

export default CardItem;