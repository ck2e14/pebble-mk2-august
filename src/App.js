import React, { useState } from "react";
import Splash from "./Components/Splash/Splash";
import NavBar from "./Components/NavBarV2/NavBarV2";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import WhatDone from './Components/WhatWeHaveDone/WhatWeHaveDone'
import LowerTagline from "./Components/LowerTagline/LowerTagline";
import Contact from './Components/Contact/Contact'
import { HashRouter, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ScreenOrientationReact from "screen-orientation-react";
import "./App.css";

function App() {
   const [shader, setShader] = useState(false);
   const [isSplash, setIsSplash] = useState(true);

   const toggleShaderOn = () => setShader(true);
   const toggleShaderOff = () => setShader(false);

   const landscapeOptions = {
      color: "#fff",
      bgColor: "#8bdac6",
      animation: true,
      fontSize: 3,
      iconColor: "#464646",
      message: "This % zoom/screen orientation is not supported. Please reduce zoom % or turn to portrait.",
      minHeight: 350
   };

   return (
      <>
         <HashRouter>
            <ScreenOrientationReact options={landscapeOptions}/>
            <div className='App-container'>
               <CSSTransition in={shader} timeout={500} classNames='my-node' unmountOnExit>
                  <div className='shader'></div>
               </CSSTransition>

               <NavBar
                  toggleShaderOff={toggleShaderOff}
                  toggleShaderOn={toggleShaderOn}
                  isSplashPage={isSplash}
                  toggleIsSplash={setIsSplash}
               />

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

                  <Route exact path='/what-we-have-done'>
                     <WhatDone />
                     <LowerTagline />
                  </Route>

                  <Route exact path='/contact'>
                     <Contact />
                     <LowerTagline />
                  </Route>
               </Switch>
            </div>
         </HashRouter>
      </>
   );
}

export default App;
