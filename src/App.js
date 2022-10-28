
import './App.css';
import Address from './components/Address';
import Carousels from './components/Carousels';
import Locations from './components/Locations';
import Payment from './components/Payment';

function App() {
  return (
    <div>
      <Carousels/>
    
    <div className='container'>
    <Address/>
    <Locations/>
    <Payment/>
    </div>
    </div>
  );
}

export default App;
