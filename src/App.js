
import './App.css';
import Address from './components/Address';
import Carousels from './components/Carousels';
import Cart from './components/Cart';
import Locations from './components/Locations';
import Payment from './components/Payment';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Carousels/>
    
    <div className='container'>
    <Address/>
    <Locations/>
    <Payment/>
    <Product/>
    <Cart/>
    </div>
    </div>
  );
}

export default App;
