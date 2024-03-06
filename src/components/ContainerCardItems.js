import CardItem from "./CardItem";
import fetchSimulation from "../utils/fetchSimulation";
import { useEffect, useState } from "react";
import productos from "../utils/products";
import "./styles/containerClassItems.css"
import { useParams } from "react-router-dom";


const ContainerCardItems = () => {  
    const [ datos, setDatos] = useState ( [] );
    let {idCategory } = useParams()

    useEffect(() => {
        setDatos ( [] );

        if(idCategory == undefined){
            fetchSimulation(productos, 1000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
        } else {
            fetchSimulation(productos.filter(filter => filter.type == idCategory))
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }   

    }, [idCategory])

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