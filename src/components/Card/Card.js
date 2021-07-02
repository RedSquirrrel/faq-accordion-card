import React, { useState } from 'react';

import arrow from '../../images/icon-arrow-down.svg';
import '../../App.css';

const Card = ({ options, title }) => {
  const [visible, setVisible] = useState(false);

  const hiddenWhenVisible = { display: visible ? '' : 'none' };

  const onTitleClick = () => {
    console.log(visible);
    setVisible(!visible);
  };

  return (
    <React.Fragment>
      <div onClick={onTitleClick} className='flex hover'>
        <p className={`question ${!options.id === visible ? '' : 'bold'}`}>{options.question}</p>
        <img className={`${!options.id === visible ? '' : 'arrow'}`} src={arrow} alt='arrow' />
      </div>
      <div style={hiddenWhenVisible}>
        <p className='answer'>{options.answer}</p>
      </div>
      <div className='line'></div>
    </React.Fragment>
  );
};

export default Card;
