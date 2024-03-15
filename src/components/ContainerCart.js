import "../components/styles/containerCart.css"
import ItemCart from "./ItemCart";
import close from "../img/close.png";
import clear from "../img/clear.svg";
import { useContext } from "react";
import { listCartContext } from "../components/ProviderContextCart";
import { constrollerShowCart } from "./ContextCart";

const ContainerCart = () => {

    const { listCart, clearCart } = useContext(listCartContext)
    const { cartShow, setCartShow } = useContext(constrollerShowCart)

    const style={
        display:cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="cart" style={style}>

            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <img src={close} alt="cerrar carrito"></img>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0) ? <span className="emptyCart">Tu carrito está vacío ¡llenalo!</span>
                    : listCart.map( product => (
                        <ItemCart
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.imageProduct}
                        quantity={product.quantity}
                        price={product.price}
                        />
                    ))
                }
            </div>

            <div className="terminarCompra">
                <button className="terminar">Terminar Compra</button>

                <button className="clear" onClick={clearCart}>
                    <img src={clear} alt="vaciar carrito"></img>
                </button>
            </div>

        </div>
    )
}

export default ContainerCart