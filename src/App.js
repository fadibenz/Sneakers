import './App.css';
import { useState, useEffect } from 'react';
import Home from './Home';
import { Route, Routes, Router } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import ScrollToTop from './ScrollToTop';
import ProductChekout from './ProductChekout';
import Cart from './Cart';
import Proceed from './Proceed';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://sneakers-api-ycw6.onrender.com/men')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <ScrollToTop>
      <Routes>
        <Route index element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='/*' element={<Home />} />
          

        <Route path='Men' element={<Men data={data} />} />
        <Route path='Women' element={<Women data={data} />} />
        <Route path='Kids' element={<Kids data={data} />} />
        <Route path='Chekout/:productId' element={<ProductChekout />} />

        <Route path='Cart' element={<Cart />} />
        <Route path='Proceed' element={<Proceed />} />
        
      </Routes>
    </ScrollToTop>
  );
}

export default App;
