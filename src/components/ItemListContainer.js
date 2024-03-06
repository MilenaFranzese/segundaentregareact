import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Plantas">
                    {props.itemUno}
                </Link>
            </li>

            <li>
                <Link  to="category/Macetas">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link  to="category/Sustratos">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link  to="category/Herramientas">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;