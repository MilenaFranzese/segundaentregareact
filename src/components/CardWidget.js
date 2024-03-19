import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { listCartContext } from "./ProviderContextCart";
import { constrollerShowCart } from "./ContextCart";

const CardWidget = () => {

    const { cartShow, setCartShow } = useContext (constrollerShowCart)
    const { listCart } = useContext (listCartContext)

    const totalItems = listCart.reduce((total, item) => total + item.quantity, 0);

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerCarrito" onClick={showCart}>
            <div className="carrito">
                <FaShoppingCart/>
                <span className="contador">
                    {totalItems}
                </span>
            </div>
        </div>


)
}

export default CardWidget;