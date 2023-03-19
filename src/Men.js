import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Productdisplay from './componenets/Productdisplay';
const Men = () => {
  return (
    <div>
      <main>
        <Navbar />
        <section className='Display--Main'>
          <article className='Display--info'>
            <h2>MENS</h2>
            <p>
              Shop the latest Men's sneakers at Sneakers !
              Find Nike Air Max, VEJA, adidas NMD and more from the
              comfort of a screen. Easy returns and Afterpay available.
            </p>
          </article>
        </section >
        <Productdisplay />
      </main>
      <Footer />
    </div>
  );
};

export default Men;
