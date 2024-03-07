import icon from "../components/img/Icon.png";
import { Link } from "react-router-dom";

function Brand (){
    return(
        
            <Link to="/">
                <div className="brandContainer">
                    <img src={icon} alt="icon tienda" className="iconPlant"></img>
                    <h1 className="brandTitle">Vivero Online </h1>
                </div>
            </Link>

    )
}

export default Brand;
