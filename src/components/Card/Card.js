import React, { useState } from 'react';

import arrow from '../../images/icon-arrow-down.svg';
import '../../App.css';

const Card = ({ options, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = index => {
    setActiveIndex(index);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div key={option.question}>
        <div
          onClick={() => onTitleClick(index)}
          className={`flex ${index === activeIndex ? '' : 'active'}`}
        >
          <p className={`question ${index === activeIndex ? 'bold' : ''}`}>{option.question}</p>
          <img className={`${index === activeIndex ? 'arrow' : ''}`} src={arrow} alt='arrow' />
        </div>
        <div className={`content ${index === activeIndex ? '' : 'active'}`}>
          <p className='answer'>{option.answer}</p>
        </div>
        <div className='line'></div>
      </div>
    );
  });

  return (
    <div className='card'>
      <h1 className='title'>{title}</h1>
      <div className='container'>
        <div className='images'></div>
        {/* <div className='image_1'></div>
        <div className='image_2'></div> */}
        <div className='accordion'>{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Card;
