import './App.css';
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import ScrollToTop from './ScrollToTop';
import ProductChekout from './ProductChekout';
import Cart from './Cart';
import Proceed from './Proceed';

function App() {


  return (
    <ScrollToTop>
      <Routes>
        <Route index element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='/*' element={<Home />} />
          
        <Route path='Men' element={<Men  />} />
        <Route path='Women' element={<Women  />} />
        <Route path='Kids' element={<Kids  />} />
        <Route path='Chekout/:productId' element={<ProductChekout />} />

        <Route path='Cart' element={<Cart />} />
        <Route path='Proceed' element={<Proceed />} />    
      </Routes>
    </ScrollToTop>
  );
}

export default App;
