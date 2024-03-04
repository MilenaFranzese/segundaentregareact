import CardItem from "./CardItem";
import fetchSimulation from "../utils/fetchSimulation";
import { useEffect, useState } from "react";
import productos from "../utils/products";

const ContainerCardItems = () => {  
    const [ datos, setDatos] = useState ( [] );

    useEffect(() => {
        fetchSimulation(productos, 3000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [])

    return(
        <CardItem />
    )
}

export default ContainerCardItems;