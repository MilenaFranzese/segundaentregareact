import Description from "./Description";
import Image from "./Image";
import "./styles/detailsItem.css";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimultion from "../utils/fetchSimulation";
import productos from "../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCantCart from "./AddCantCart";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimultion(productos.filter( flt => flt.id == idItem), 1000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={items.imageProduct}
                            />
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    title= {items.title}
                                    parrafo= {items.description}
                                    cantidad = {items.stock}
                                    precio={items.price}
                                />
                                
                            <div className="buttons">
                                    
                                    <AddCantCart
                                        cant={5}
                                    />
                                <div className="agregarAlCarrito">
                                    <ButtonDetalles 
                                        txt="Agregar al carrito"
                                    />
                                </div>
                                    
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;