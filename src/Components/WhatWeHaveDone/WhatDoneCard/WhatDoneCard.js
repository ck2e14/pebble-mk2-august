import React, { useState } from "react";
import "./WhatDoneCard-style.css";

const WhatDoneCard = props => {
   const [showFront, setShowFront] = useState(true);

   const { success } = props;

   return (
      <div className='what-done-card-container' onMouseLeave={() => setShowFront(true)}>
         {showFront && (
            <div className='what-done-card-front' onMouseMove={() => setShowFront(false)}>
               <div className='card-front-title' onMouseMove={() => setShowFront(false)}>
                  {success?.title}
               </div>
            </div>
         )}
         {!showFront && (
            <div className='what-done-card-back' onMouseLeave={() => setShowFront(true)}>
               <div className='card-back-contents'>
                  {success?.backTitle}
                  {success?.backContent}
               </div>
            </div>
         )}
      </div>
   );
};

export default WhatDoneCard;
