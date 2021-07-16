import React, { useState, useEffect, useRef } from 'react';

import arrow from '../../images/icon-arrow-down.svg';
import '../../App.css';

const Card = ({ options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <div ref={ref}>
      <div onClick={() => setOpen(!open)} className='flex hover'>
        <p className={`question ${open ? 'bold' : ''}`}>{options.question}</p>
        <img className={`${open ? '' : 'arrow'}`} src={arrow} alt='arrow' />
      </div>
      <div style={{ display: `${open ? '' : 'none'}` }}>
        <p className='answer'>{options.answer}</p>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Card;
