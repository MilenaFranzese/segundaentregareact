import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { listCartContext } from "./ProviderContextCart";
import { constrollerShowCart } from "./ContextCart";

function CardWidget(){

    const { cartShow, setCartShow } = useContext (constrollerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerCarrito" onClick={showCart}>
            <div className="carrito">
                <FaShoppingCart/>
                <span className="contador">
                    {listCart.lenght}
                </span>
            </div>
        </div>


)
}

export default CardWidget