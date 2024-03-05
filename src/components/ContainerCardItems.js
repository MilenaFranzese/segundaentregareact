import CardItem from "./CardItem";
import fetchSimulation from "../utils/fetchSimulation";
import { useEffect, useState } from "react";
import productos from "../utils/products";
import "./styles/containerClassItems.css"

const ContainerCardItems = () => {  
    const [ datos, setDatos] = useState ( [] );

    useEffect(() => {
        fetchSimulation(productos, 3000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [])

    return(
        <div className="containerClassItems">
            {
                datos.map ( product => (
                    <CardItem
                        key={product.id}
                        imagen={product.imageProduct}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                )

                )
            }
        </div>
    )
}

export default ContainerCardItems;