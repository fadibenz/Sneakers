import React from 'react';
import { useState } from 'react';
import logo from './images/logo.svg';
import menu from './images/icon-menu.svg';
import avatar from './images/image-avatar.png'
import { FaShoppingCart} from 'react-icons/fa';
import { MdClear} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ newCart, count}) => {
  const navigate = useNavigate()
  const [humb, setHumb] = useState(false);
  const buttons = ['Home', 'Men', 'Women', 'Kids'];

  return (
    <nav>
      <div className='nav--container'>
        <div className='Navigation'>
          <button className='Humburger' onClick={() => setHumb(true)}>
            <img src={menu} />
          </button>
          <a onClick={() => navigate('/')} className='logo--link'>
            <img className='logo' src={logo} />
          </a>
          <div className='Btn-Container'>
            {buttons.map((button) => {
              return (
                <button
                  className='Single-Btn'
                  onClick={() => navigate(`/${button}`)}
                >
                  {button}
                </button>
              );
            })}
          </div>
        </div>
        <div className='Profile-Cnt'>
          <div>
            <button
              className='cart'
              onClick={() => navigate('/Cart')
              }
            >
              <FaShoppingCart className='Cart1' />
              <div className={`Cart-Notif ${!newCart && 'hide'}`}>{count}</div>
            </button>
          </div> 
          <div>
            <img className='avatar' src={avatar} alt='profile' />
          </div>
        </div>
      </div>
      <hr className='Nav-Line' />
      <section className={`Navmenu  ${humb ? 'Show' : 'Hide'}`}>
        <div className={`Navmenu--block  ${humb ? 'Translate' : 'Hide'}`}>
          <MdClear className='Clear' onClick={() => setHumb(false)} />
          <div className='Primarynav'>
            {buttons.map((button) => {
              return <button className='Single-Btn'
              onClick={() => navigate(`/${button}`)}>{button}</button>;
            })}
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
