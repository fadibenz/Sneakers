import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { MdClear } from 'react-icons/md';

import img1 from './images/image-product-1.jpg';
import img11 from './images/image-product-2.jpg';
import img111 from './images/image-product-3.jpg';
import img1111 from './images/image-product-4.jpg';

import img2 from './images/image-product-1-thumbnail.jpg';
import img3 from './images/image-product-2-thumbnail.jpg';
import img4 from './images/image-product-3-thumbnail.jpg';
import img5 from './images/image-product-4-thumbnail.jpg';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const Check = (number) => {
    if (number < 0) {
      return 3;
    }
    if (number > 3) {
      return 0;
    } else return number;
  };
  const photos = [img1, img11, img111, img1111];
  const thumbnails = [img2, img3, img4, img5];

  return (
    <>
      <main>
        <Navbar></Navbar>
        <section className='Cart--main'>
          <h2>Cart</h2>
          <article>
            <section className='products--display Desktop--cart'>
              <table>
                <thead>
                  <tr>
                    <td className='Product--cell'>
                      <span>Product</span>
                    </td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='Product--cell' data-title='Product'>
                      <img src={img1}></img>
                      <h5> Jordan</h5>
                      <h4>Jordan air </h4>
                    </td>
                    <td>$ 240</td>
                    <td className='Quantity--cell'>
                      <span className='Price--discount'>2</span>
                    </td>
                    <td>$ {2 * 240}</td>
                    <td>
                      <button
                        className='Checkout'
                        onClick={() => setHide(false)}
                      >
                        Checkout
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className='Mobile--cart'>
              <section className='single--blog'>
                <div className='Blog--thumbnail'>
                  <img src={img1} />
                </div>
                <div className='Blog--info'>
                  <h3 className='Blog--title'>Jordan Fall</h3>
                  <p className='blog--description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas hendrerit ullamcorper urna, ut lacinia nisi
                  </p>
                  <div className='Blog--btn'>
                    <div>
                      <button className='Checkout'>Checkout</button>
                    </div>
                    <div className='Order--mobile'>
                      <div>
                        <h4>Quantity: 3</h4>
                      </div>
                      <div className='Price--discount'>
                        <h4>480 $</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <section className='cart--total'>
              <h3>
                Cart <span className='title--clr'>totals</span>
              </h3>
              <table>
                <tr>
                  <td className='total--cell'>Total</td>
                  <td>
                    <b>$ 420</b>
                  </td>
                </tr>
              </table>
              <button className='Checkout' onClick={() => navigate('/Proceed')}>
                Proceed to Chekout
              </button>
            </section>
          </article>
        </section>
        <section className={`Checkout-Box ${hide && 'Hide'}`}>
          <article className='Display-Cnt'>
            <article className='Img-Cnt'>
              <div className='Big-Img'>
                <MdClear
                  className='Close-Checkout'
                  onClick={() => setHide(true)}
                />
                <button
                  className={`Check-Btn Previous  btn-show `}
                  onClick={() => setValue(Check(value - 1))}
                >
                  <MdChevronLeft />
                </button>
                <img src={photos[value]} />
                <button
                  className={`Check-Btn Next btn-show`}
                  onClick={() => setValue(Check(value + 1))}
                >
                  <MdChevronRight />
                </button>
              </div>
              <div className='Thumbnails'>
                {thumbnails?.map((thumbnail, Tindex) => {
                  return (
                    <div
                      className={`Thumb-Wrapper ${
                        Tindex === value && 'Active-Thumb'
                      }`}
                    >
                      <img
                        className={Tindex === value && 'Opacity'}
                        src={thumbnail}
                        key={Tindex}
                        onClick={() => setValue(Tindex)}
                      />
                    </div>
                  );
                })}
              </div>
            </article>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
