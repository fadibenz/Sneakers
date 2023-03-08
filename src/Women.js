import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Productdisplay from './componenets/Productdisplay';
const Women = ({data}) => {
  return (
    <div>
      <main>
        <Navbar />
        <section className='Display--Main'>
          <article className='Display--info'>
            <h2>WOMENS</h2>
            <p>
              Shop the latest Women's sneakers at Sneakers ! New Balance,
              VEJA, adidas NMD, Vans and more from the comfort of a screen. Easy
              returns and Afterpay available.
            </p>
          </article>
        </section>
        <Productdisplay data={data}/>
      </main>
      <Footer />
    </div>
  );
};

export default Women;
