import Brand from "./Brand";
import CardWidget from "./CardWidget";
import ItemListContainer from "./ItemListContainer";

function Navbar (){
    return(
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Plantas"
                    itemDos = "Macetas"
                    itemTres = "Sustratos"
                    itemCuatro = "Herramientas"
                />
            </nav>

            <div className="containerCart">
                <CardWidget />
            </div>

        </header>
    )
}

export default Navbar;