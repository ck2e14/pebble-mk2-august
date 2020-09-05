import React from "react";
import "./NavBarV2-style.css";
// import MobileNavBar from './MobileNavBar/MobileNavBar'
import { Link } from "react-router-dom";
// import { isMobile } from "react-device-detect";

const NavBar = props => {
   const { toggleShaderOn, toggleShaderOff } = props;

   // if(isMobile){
   //    return(
   //       <MobileNavBar />
   //    )
   //    } else {
   return (
      <div className='navbar-container' onMouseEnter={toggleShaderOn} onMouseLeave={toggleShaderOff}>
         <div className='not-expanded'>
            <h5 className=''>M E N U</h5>
         </div>

         <div className='navbar-flex-container'>
            <Link to='/who-we-are' className='nav-item'>
               <div>WHO WE ARE</div>
            </Link>

            <Link to='/what-we-do' className='nav-item'>
               <div>WHAT WE DO</div>
            </Link>

            <Link to='/what-we-have-done' className='nav-item'>
               <div>WHAT WE'VE DONE</div>
            </Link>

            <Link to='/contact' className='nav-item'>
               <div>CONTACT</div>
            </Link>
         </div>
      </div>
   );
   // }
};

export default NavBar;
