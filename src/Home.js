import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FaRegComment } from 'react-icons/fa';
import { BsBagCheck, BsCalendarEvent } from 'react-icons/bs';
import {
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

import { RxDoubleArrowRight } from 'react-icons/rx';
import blogImg1 from './images/Blogimg1.jpg';
import blogImg2 from './images/Blogimg2.jpg';
import blogImg3 from './images/Blogimg3.jpg';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className='home--wrapper'>
      <section className='hero--wrapper'>
        <main className='Home'>
          <Navbar />
          <section className='Hero'>
            <article className='Hero--info'>
              <h5>sneakers company Inc.</h5>
              <h1>
                Your favourite Snea<span className='title--clr'>kers.</span>
              </h1>
              <p>
                Shop your favourite sneakers from the comfort of your screen, we
                provide a variety of designer-sneakers from New Balance, VANS,
                Nike and more !
              </p>
              <a className='Hero--btn' href='#Catalog'>
                GET STARTED
              </a>
            </article>
          </section>
        </main>
      </section>
      <main className='Home' id='Catalog'>
        <article className='catalog'>
          <div className='catalog--titlewrap'>
            <h2 className='catalog--title'>
              <span className='title--clr'>CATA</span>LOG
            </h2>
          </div>
          <article className='catalog--cards'>
            <div className='womencard'>
              <div className='catalog--singlecard'>
                <div className='catalog-cardinfo'>
                  <h4>WOMEN</h4>
                  <p>
                    Checkout the latest women sneakers from your favourite
                    brands from here !
                  </p>
                  <button
                    className='catalog--cardbtn'
                    onClick={() => navigate('/Women')}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
            <div className='mencard'>
              <div className='catalog--singlecard'>
                <div className='catalog-cardinfo'>
                  <h4>MEN</h4>
                  <p>
                    Checkout the latest men sneakers from your favourite brands
                    from here !
                  </p>
                  <button
                    className='catalog--cardbtn'
                    onClick={() => navigate('/Men')}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
            <div className='kidscard'>
              <div className='catalog--singlecard'>
                <div className='catalog-cardinfo'>
                  <h4>KIDS</h4>
                  <p>
                    Checkout the latest kids sneakers from your favourite brands
                    from here !
                  </p>
                  <button
                    className='catalog--cardbtn'
                    onClick={() => navigate('/Women')}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </article>
        </article>
        <article className='preview'>
          <article className='blog'>
            <div className='blog--title'>
              <h2>
                FROM THE <span className='title--clr'>BLOG</span>
              </h2>
            </div>
            <section className='single--blog'>
              <div className='Blog--thumbnail'>
                <img src={blogImg1} />
              </div>
              <div className='Blog--info'>
                <h3 className='Blog--title'>Trending sneakers for 2023.</h3>
                <p className='blog--description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas hendrerit ullamcorper urna, ut lacinia nisi
                  consectetur vitae. Aenean porta ligula vel sem eleifend
                  ornare. Sed neque justo, cursus at lorem sed, tristique
                  ultricies metus. Praesent imperdiet erat et ipsum tincidunt
                  rutrum. Praesent vel elit sit amet magna pharetra sagittis ac
                  in est. Aliquam laoreet metus enim. Nulla sit amet tellus sed
                  felis molestie dignissim. Phasellus at congue ex, ut pulvinar
                  leo. Curabitur ornare bibendum mauris, nec eleifend est...
                </p>
                <div className='Blog--btn'>
                  <div>
                    <button className='Blog--CTA'>continue reading</button>
                  </div>
                  <div className='blog--details'>
                    <button className='blog--date'>
                      <BsCalendarEvent />
                      <span>2-02-2023</span>
                    </button>
                    <button className='blog--comment'>
                      <FaRegComment />
                      <span>134 Comments</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className='single--blog'>
              <div className='Blog--thumbnail'>
                <img src={blogImg3} />
              </div>
              <div className='Blog--info'>
                <h3 className='Blog--title'>Black on Black.</h3>
                <p className='blog--description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas hendrerit ullamcorper urna, ut lacinia nisi
                  consectetur vitae. Aenean porta ligula vel sem eleifend
                  ornare. Sed neque justo, cursus at lorem sed, tristique
                  ultricies metus. Praesent imperdiet erat et ipsum tincidunt
                  rutrum. Praesent vel elit sit amet magna pharetra sagittis ac
                  in est. Aliquam laoreet metus enim. Nulla sit amet tellus sed
                  felis molestie dignissim. Phasellus at congue ex, ut pulvinar
                  leo. Curabitur ornare bibendum mauris, nec eleifend est...
                </p>
                <div className='Blog--btn'>
                  <div>
                    <button className='Blog--CTA'>continue reading</button>
                  </div>
                  <div className='blog--details'>
                    <button className='blog--date'>
                      <BsCalendarEvent />
                      <span>09-02-2023</span>
                    </button>
                    <button className='blog--comment'>
                      <FaRegComment />
                      <span>147 Comments</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className='single--blog'>
              <div className='Blog--thumbnail'>
                <img src={blogImg2} />
              </div>
              <div className='Blog--info'>
                <h3 className='Blog--title'>Beige is not always boring.</h3>
                <p className='blog--description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas hendrerit ullamcorper urna, ut lacinia nisi
                  consectetur vitae. Aenean porta ligula vel sem eleifend
                  ornare. Sed neque justo, cursus at lorem sed, tristique
                  ultricies metus. Praesent imperdiet erat et ipsum tincidunt
                  rutrum. Praesent vel elit sit amet magna pharetra sagittis ac
                  in est. Aliquam laoreet metus enim. Nulla sit amet tellus sed
                  felis molestie dignissim. Phasellus at congue ex, ut pulvinar
                  leo. Curabitur ornare bibendum mauris, nec eleifend est...
                </p>
                <div className='Blog--btn'>
                  <div>
                    <button className='Blog--CTA'>continue reading</button>
                  </div>
                  <div className='blog--details'>
                    <button className='blog--date'>
                      <BsCalendarEvent />
                      <span>31-01-2023</span>
                    </button>
                    <button className='blog--comment'>
                      <FaRegComment />
                      <span>538 Comments</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <div className='seemore'>
              <button>
                <span>See more</span>
                <RxDoubleArrowRight className='seemore--arr' />
              </button>
            </div>
          </article>
          <article className='about--info'>
            <h2>
              AB<span className='title--clr'>OUT</span>
            </h2>
            <p className='about-p'>
              Sneakers is your go to for buying the right fitting sneakers, we
              were founded in the late 2020, with the burst of the Covid-19
              pandemic, to help you cope and find what you're looking for from
              the comfort of your screen
            </p>
          </article>
          <article>
            <div className='preview--info'>
              <div>
                <HiOutlineLocationMarker className='preview--info__btn' />
                <h4>FREE SHIPPING</h4>
                <p>Free for all orders over $86.00</p>
              </div>
              <div>
                <HiOutlineCurrencyDollar className='preview--info__btn' />
                <h4>MONEY BACK</h4>
                <p>100% Money Back - 30 days</p>
              </div>
              <div>
                <FaRegComment className='preview--info__btn' />
                <h4>24H SUPPORT</h4>
                <p>Fast 24/7 service support</p>
              </div>
              <div>
                <BsBagCheck className='preview--info__btn' />
                <h4>LOYALITY BONUS</h4>
                <p>Best program for loyal clients</p>
              </div>
            </div>
          </article>
          <div className='preview--img'>
            <div className='img1'></div>
            <div className='img2'></div>
            <div className='img3'></div>
          </div>
        </article>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
