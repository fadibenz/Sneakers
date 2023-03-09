import React from 'react';
import  Navbar  from './Navbar';
import  Footer  from './Footer';

const Proceed = () => {
    return (
      <>
        <main>
          <Navbar />
          <form className='Proceed--form'>
            <article className='Billing'>
              <section className='Billing--details'>
                <h2>Billing details</h2>
                <section>
                  <div>
                    <label>
                      First name <span>*</span>
                      <input type='text' />
                    </label>
                    <label>
                      Last name <span>*</span>
                      <input type='text' />
                    </label>
                    <label>
                      Street address <span>*</span>
                      <input type='text' />
                    </label>
                    <label>
                      Town/ City <span>*</span>
                      <input type='text' />
                    </label>
                  </div>
                  <div>
                    <label>
                      Phone <span>*</span>
                      <input type='text' />
                    </label>
                    <label>
                      Instagram <span>*</span>
                      <input type='text' />
                    </label>
                    <label>
                      Email address <span>*</span>
                      <input type='text' />
                    </label>
                  </div>
                </section>
              </section>
             
            </article>
            <article className='Order'>
              <table>
                <thead>
                  <tr>
                    <th className='Order--product'>Product</th>
                    <th className='Order--total'>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='Order--details'>
                      <span className='title--clr'>New Balance</span>
                      <h4>size: 40</h4>
                      <h4>Color: Black</h4>
                    </td>
                    <td>200$</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>200$</td>
                  </tr>
                </tbody>
              </table>
            </article>
            <article className='Submit'>
              <div className='Sumbit--pay'>
                <h4>Cash on delivery</h4>
                <div>
                  <p>Pay with cash upon delivery</p>
                </div>
              </div>
              <hr></hr>
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className='Submit--btn'>
                <button type='submit' className='Checkout'>
                  Place order
                </button>
              </div>
            </article>
          </form>
        </main>
        <Footer />
      </>
    );
};

export default Proceed;
