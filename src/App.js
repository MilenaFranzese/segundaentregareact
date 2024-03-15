import './style.css';
import Navbar from './components/Navbar';
import ContainerCardItems from './components/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/DetailsItem';
import ProviderContextCart from './components/ProviderContextCart';

function App() {
  return (
    <div className="App">
      <ProviderContextCart>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={ <ContainerCardItems />}/>
            <Route path="item/:idItem" element={ <DetailsItem />}/>
            <Route path="/category/:idCategory"  element={ <ContainerCardItems />}/>
          </Routes>
        </BrowserRouter>
      </ProviderContextCart>
    </div>
  );
}

export default App;
