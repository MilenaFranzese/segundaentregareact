import Image from "./Image";
import Description from "./Description";
import ButtonDetalle from "./ButtonDetalle";
import ButtonAddCart from "./ButtonAddCart";
import "./styles/cardItem.css";
import ImgPrueba from "../components/img/img1.jpg"

function CardItem (){
    return(
        <div className="cardItems">
            <Image imagen={ImgPrueba}/>
            <Description title="Monstera Adasonii"/>

            <div className="buttons">   
                <ButtonDetalle/>
                <ButtonAddCart/>
            </div>
        </div>
    )
}

export default CardItem;