import { FaShoppingCart } from "react-icons/fa";

function CardWidget(){
    return(
        <div className="containerCarrito">
            <div className="carrito">
                <FaShoppingCart/>
                <span className="contador">
                    1
                </span>
            </div>
        </div>


)
}

export default CardWidget