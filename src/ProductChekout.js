import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FaShoppingCart, FaPlus, FaMinus} from 'react-icons/fa';
import {MdChevronLeft} from 'react-icons/md';
import Showimages from './Showimages';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import shoes from './data/data'
const ProductChekout = () => {
  const [count, setCount] = useState(0);
  const [newCart, setNewCart] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  const [product, setProduct] = useState(location.state)
  let thumbnail = [product.photoUrl];
  const element = product.photoUrl;
  let data = shoes.slice(1, 6);


  
  let n = 3;
  for (let i = 0; i < n; i++) {
    thumbnail.push(element);
  }
  
  return (
    <div className='container'>
      <main>
        <Navbar
        newCart={newCart}
        count={count}
        />
        <section  className='Product--Display'>
          <section className='Main-Page'>
            <div className='Mobile-version'>
              <h5 className='company-name'>{product.brand}</h5>
              <h1 className='main-title'>{product.name}</h1>
            </div>
            <Showimages
              swipe={false}
              photos={product.photoUrl}
              thumbnails={thumbnail}
            />
            <article className='Info-Cnt'>
              <div className='Desktop-vers'>
                <h5 className='company-name'>{product.brand}</h5>
                <h1 className='main-title'>{product.name}</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                rhoncus auctor ipsum, a cursus risus faucibus ac. Aenean dictum
                lorem in mollis iaculis. Morbi egestas velit mi, a hendrerit
                metus congue quis. Donec ac rhoncus lacus, ac mollis tortor.
                Aenean tincidunt blandit lectus, ac malesuada ex ullamcorper et.
              </p>
              <div className='Price'>
                <div>
                  <h3>${product.price}.00</h3>
                  <h4 className='Price--discount'>50%</h4>
                </div>
                <span>$250.00</span>
              </div>
              <div className='Action-Btn'>
                <div className='Add-Remove'>
                  <div>
                    <button
                      onClick={() => {
                        if (count !== 0) {
                          setCount(count - 1);
                        }
                      }}
                    >
                      <FaMinus />
                    </button>
                    <span>{count}</span>
                    <button onClick={() => setCount(count + 1)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button className='Add-Cart' onClick={() => setNewCart(!newCart)}>
                  <FaShoppingCart className='Cart2' />
                  Add to cart
                </button>
              </div>
            </article>
          </section>
          <article className='YouMightAlso'>
            <h2>
              You might also <span className='title--clr'>like</span>
            </h2>
            <div className='Featured--products'>
              <article className='card--container'>
                {data.map((product) => {
                  return (
                    <a
                      onClick={()=> {
                        setProduct(product);
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                      }}
                      className='Product--link product--card'
                    >
                      <img src={product.photoUrl}></img>
                      <div className='card__info'>
                        <p>{product.brand}</p>
                        <h3>{product.name}</h3>
                        <h4>${product.price}</h4>
                      </div>
                    </a>
                  );
                })}
              </article>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductChekout;
