import './style.css';
import Navbar from './components/Navbar';
import ContainerCardItems from './components/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/DetailsItem';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={ <ContainerCardItems />}/>
            <Route path="item/:idItem" element={ <DetailsItem />}/>
            <Route path="/category/:idCategory"  element={ <ContainerCardItems />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
