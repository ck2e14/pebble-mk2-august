import React, { useState } from "react";
import Splash from "./Components/Splash/Splash";
import NavBar from "./Components/NavBarV2/NavBarV2";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import WhatWeDo from './Components/WhatWeDo/WhatWeDo'
import LowerTagline from './Components/LowerTagline/LowerTagline'
import { HashRouter, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";

function App() {
   const [shader, setShader] = useState(false);

   const toggleShaderOn = () => setShader(true);

   const toggleShaderOff = () => setShader(false);

   return (
      <>
         <HashRouter>
            <div className='App-container'>
               <CSSTransition in={shader} timeout={500} classNames='my-node' unmountOnExit>
                  <div className='shader'></div>
               </CSSTransition>

               <NavBar toggleShaderOff={toggleShaderOff} toggleShaderOn={toggleShaderOn}/>

               <Switch>
                  <Route exact path='/'>
                     <Splash toggleShaderOff={toggleShaderOff} />
                  </Route>

                  <Route exact path='/who-we-are'>
                     <WhoWeAre />
                     <LowerTagline />
                  </Route>

                  <Route exact path='/what-we-do'>
                     <WhatWeDo />
                     <LowerTagline />
                  </Route>
               </Switch>
            </div>
         </HashRouter>
      </>
   );
}

export default App;
