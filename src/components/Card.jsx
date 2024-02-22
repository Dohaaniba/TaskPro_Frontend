import React, { useState, useEffect } from 'react';

import '../css/Card.scss';

export const Card = () => {
  
  const cardObject = [
    {
      titre : "participants",
      number : "1322"
    },
    {
      titre: "time",
      number:"1:40 | to prev day"
    }
    ,
    {
      titre: "activity",
      number:"5% | to prev day"
    }

  ]

  return (
    <div className="card--container">
      {cardObject.map((item)=>(
        <div className='card'>
          <div className="titre">
            <h2>{item.titre}</h2>
            <h6>{item.number}</h6>
          </div>

        </div>
      ))}

    </div>
    
  );
};
