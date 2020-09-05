import React, { useState } from "react";
import "./ModelStepCard-style.css";

const ModelStepCard = props => {
   const [showFront, setShowFront] = useState(true);

   const { stepName, stepContent } = props;

   return (
      <div
         className='model-step-card-container'
         onMouseOver={() => setShowFront(false)}
         onMouseLeave={() => setShowFront(true)}>
         {showFront && <div className='stepName'>{stepName}</div>}
         {!showFront && (
            <div className='model-step-card-back' onMouseLeave={() => setShowFront(true)}>
               <div className='step-content-container'>{stepContent}</div>
            </div>
         )}
      </div>
   );
};

export default ModelStepCard;
