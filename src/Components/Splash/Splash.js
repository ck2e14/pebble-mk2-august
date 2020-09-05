import React from "react";
import "./Splash-style.css";

const Splash = props => {
   const { ensureShaderOff } = props;

   return (
      <div className='splash-container' onMouseEnter={ensureShaderOff}>
         <div className='splash-left-section'>
            <span>Pebble</span>
         </div>

         <div className='splash-right-section'>
            <span>Solutions</span>
         </div>
      </div>
   );
};

export default Splash;
