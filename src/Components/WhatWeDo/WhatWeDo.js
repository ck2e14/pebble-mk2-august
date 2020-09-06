import React from "react";
import ModelStepCard from "./ModelStepCard/ModelStepCard";
import "./WhatWeDo-style.css";

const WhatWeDo = props => {
   const stepContent1 = (
      <div className='step-content'>
         Businesses get into difficulty for a variety of reasons.
         <br />
         <br />
         <span>
            The first step is to carry out a swift review of the business to establish whether it can be made
            viable.
         </span>
         <br />
         <br />
         Then we develop a recovery plan and get buy-in from the stakeholders to it.
      </div>
   );

   const stepContent2 = (
      <div className='step-content'>
         <span>Put in place the right leadership </span> <br />
         to lead the business forwards and <span>establish robust financial management </span> accounting to
         ensure that the health of the business can be accurately monitored.
      </div>
   );

   const stepContent3 = (
      <div className='step-content'>
         <span>Drive a cash-positive performance </span> and <span>identify future growth levers</span>.
         <br />
         <br />
         The final stage is to deliver an exit for the stakeholders.
      </div>
   );

   return (
      <div className='what-we-do-container'>
         <div className='what-we-do-intro-larger'>
            Pebble works with stakeholders to <span>resusciate</span>, <span>restore</span> &{" "}
            <span>revitalise</span> hospitality businesses.
            <br />
            <br />
         </div>
         <div className='what-we-do-intro-smaller'>
            We have a proven three-stage model - <span>survive</span>, <span>drive</span> &{" "}
            <span>thrive</span> - that has delivered 100% successful outcomes.
         </div>
         <div className='three-step-model-container'>
            <ModelStepCard stepName='Survive' stepContent={stepContent1} isFinalCard={false} stepNumber={1} />
            <div className='arrow'>&#8594;</div>

            <ModelStepCard stepName='Drive' stepContent={stepContent2} isFinalCard={false} stepNumber={2} />
            <div className='arrow'>&#8594;</div>

            <ModelStepCard stepName='Thrive' stepContent={stepContent3} isFinalCard={true} stepNumber={3} />
         </div>
      </div>
   );
};

export default WhatWeDo;
