import { FaAudioDescription, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { listCartContext } from "./ProviderContextCart";

const ButtonAddCart = ({id}) => {

    let {addProduct} = useContext(listCartContext)

    return(
        <button id="AddCart" onClick={() => addProduct(id)}>
            <FaShoppingCart/>
        </button>
    )
}

export default ButtonAddCart;