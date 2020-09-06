import React, { useState } from "react";
import "./MobileNavBar-style.css";
import BurgerBtn from "./MobileBurgerBtn/MobileBurgerBtn";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const MobileNavBar = props => {
   const [expandNavBar, setExpandNavBar] = useState(false);

   const handleBtnClick = () => setExpandNavBar(!expandNavBar);

   return (
      <>
         <div className='mobile-nav-container'>
            {!expandNavBar && <BurgerBtn handleClick={handleBtnClick} paintBtn={"enterMenu"} />}
            {expandNavBar && <BurgerBtn handleClick={handleBtnClick} paintBtn={"exitMenu"} />}

            <CSSTransition in={expandNavBar} timeout={300} classNames={"my-node"} unmountOnExit>
               <div className='mobile-nav-expanded'>
                  <div className='mobile-nav-expanded-flex-container'>
                     <Link
                        to='/who-we-are'
                        className='mobile-nav-expanded-flex-item'
                        onClick={handleBtnClick}>
                        <div className='mobile-nav-expanded-flex-item'>Who We Are</div>
                     </Link>

                     <Link
                        to='/what-we-do'
                        className='mobile-nav-expanded-flex-item'
                        onClick={handleBtnClick}>
                        <div className='mobile-nav-expanded-flex-text'>What We Do</div>
                     </Link>

                     <Link
                        to='/what-we-have-done'
                        className='mobile-nav-expanded-flex-item'
                        onClick={handleBtnClick}>
                        <div className='mobile-nav-expanded-flex-item'>What We Have Done</div>
                     </Link>

                     <Link to='/contact' className='mobile-nav-expanded-flex-item' onClick={handleBtnClick}>
                        <div className='mobile-nav-expanded-flex-item'>Contact</div>
                     </Link>
                  </div>
               </div>
            </CSSTransition>
         </div>
      </>
   );
};

export default MobileNavBar;
