import React from 'react';
import { useState } from 'react';
import { MdClear, MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Showimages = ({ photos, thumbnails, swipe, length, setHide }) => {
  const [value, setValue] = useState(0);
  const Check = (number) => {
    if (number < 0) {
      return length - 1;
    }
    if (number > length - 1) {
      return 0;
    } else return number;
  };

  return (
    <article className='Display-Cnt'>
      <article className='Img-Cnt'>
        <div className='Big-Img'>
          {swipe ? (
            <MdClear className='Close-Checkout' onClick={() => setHide(true)} />
          ) : undefined}
          <button
            className={`Check-Btn Previous ${swipe && 'btn-show'}`}
            onClick={() => setValue(Check(value - 1))}
          >
            <MdChevronLeft />
          </button>
          <img src={photos} />
          <button
            className={`Check-Btn Next ${swipe && 'btn-show'}`}
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
  );
};

export default Showimages;
