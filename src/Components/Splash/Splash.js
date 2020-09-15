import React from "react";
import "./Splash-style.css";
import { isMobile } from "react-device-detect";

const Splash = props => {
   const { ensureShaderOff } = props;

   if (isMobile) {
      return (
         <div className='mobile-splash-container'>
            <div className='mobile-splash-top-section'>
               <div className='mobile-top-text'>Pebble</div>
            </div>
            <div className='mobile-splash-lower-section'>
               <div className='mobile-lower-text'>Solutions</div>
               <div className='mobile-lower-tagline'>
                  Hospitality business recovery to secure a positive future.
               </div>
            </div>
         </div>
      );
   } else {
      return (
         <div className='splash-container' onMouseEnter={ensureShaderOff}>
            <div className='splash-left-section'>
               <span>Pebble</span>

               <div className='tagline'>Hospitality business recovery to secure a positive future.</div>
            </div>

            <div className='splash-right-section'>
               <span>Solutions</span>
            </div>
         </div>
      );
   }
};

export default Splash;
