import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import shoes from '../data/data'

const Productdisplay = () => {
    const [filter, setFilter] = useState(false);
    const navigate = useNavigate();
    console.log(shoes);    
    return (
      <div>
        <section className='filter'>
          <label className='filter--container'>
            <input className='Search' type='text' />
            <MdSearch className='search--icon' />
            <span className='placeholder'>Search</span>
          </label>
          <div className='dropdown'>
            <button
              className='dropdown--button'
              onClick={() => setFilter(!filter)}
            >
              <span>Filters</span>
              <RiArrowDropDownLine
                className={`arrow--dropdown ${!filter && 'Show-btn'}`}
              />
              <RiArrowDropUpLine
                className={`arrow--dropdown ${filter && 'Show-btn'}`}
              />
            </button>
            <div className={`filter--buttons  ${filter && 'Show-filter'}`}>
              <button className={`btn1  ${filter && 'Show-btn'}`}>Name</button>
              <button className={`btn2  ${filter && 'Show-btn'}`}>Date</button>
              <button className={`btn3  ${filter && 'Show-btn'}`}>Price</button>
              <button className={`last-button  ${filter && 'Show-btn'}`}>
                Discount
              </button>
            </div>
          </div>
        </section>
        <article className='card--container'>
            { 
              shoes.map((product)=> {
                 return (
                   <a
                     className='Product--link product--card'
                     onClick={() => {
                       navigate(`/Chekout/${product.id}`, {
                         state: product,
                       });
                     }}
                   >
                       <img src={product.photoUrl}></img>
                       <div className='card__info'>
                         <p>{product.brand}</p>
                         <h3>{product.name}</h3>
                         <h4>${product.price}</h4>
                       </div>
                   </a>
                 );})
            }
        </article>
      </div>
    );
}

export default Productdisplay;
