import Brand from "./Brand";
import CardWidget from "./CardWidget";
import ContainerCart from "./ContainerCart";
import ItemListContainer from "./ItemListContainer";
import ContextCart from "./ContextCart";

function Navbar (){
    return(
        <ContextCart>
            <header>
                <div className="brandContainer">
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

                <ContainerCart/>

            </header>
        </ContextCart>
    )
}

export default Navbar;