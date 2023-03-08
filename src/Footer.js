import React from 'react';
import logo from './images/logo.svg';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <main className='footer--primary'>
        <div className='footer--company'>
          <img src={logo} alt='logo' />
          <p>Move your life with the right sneakers.</p>
        </div>
        <div className='footer__nav'>
          <div className='footer__nav--primary footernav'>
            <h3 className='tirle'>Us</h3>
            <div className='links--container'>
              <Link>About</Link>
              <Link to={'/Men'}>Men</Link>
              <Link to={'/Women'}>Women</Link>
              <Link to={'/Kids'}>Kids</Link>
            </div>
          </div>
          <div className='footer__policy--secondary footernav'>
            <h3 className='tirle'>Legal</h3>
            <div className='links--container'>
              <a>Terms and conditions</a>
              <a>Privacy Policy</a>
              <a>Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className='footer__contact'>
          <h4>Let's chat!</h4>
          <span>hi@sneakers.app</span>
          <div className='footer__btn'>
            <button>
              <FiFacebook />
            </button>
            <button>
              <FiInstagram />
            </button>
            <button>
              <FiTwitter />
            </button>
            <button>
              <FiLinkedin />
            </button>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
