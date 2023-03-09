import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Productdisplay from './componenets/Productdisplay';

const Kids = ({data}) => {
  return (
    <div>
      <main>
        <Navbar />
        <section className='Display--Main'>
          <article className='Display--info'>
            <h2>KIDS</h2>
            <p>
              Shop the latest Kids sneakers at Sneakers ! Find Nike Air Max,
              VEJA, adidas NMD and more from the comfort of a screen. Easy
              returns and Afterpay available.
            </p>
          </article>
        </section>
        <Productdisplay data={data} />
      </main>
      <Footer />
    </div>
  );
};

export default Kids;
