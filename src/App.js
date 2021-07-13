// Libraries
import React from 'react';
import { BrowserRouter, Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Mine
import './main.css';
import Home from './pages/Home/Home.js'
import SubPageOheya from './pages/SubPage/-Oheya/SubPageOheya';
import SubPageOryori from './pages/SubPage/-Oryori/SubPageOryori';
import SubPageOnsen from './pages/SubPage/-Onsen/SubPageOnsen';
// import InitialAnimation from './blocks/InitialAnimation/InitialAnimation';


const App = () => {

  // const history = useHistory();
  const location = useLocation();
  

  return (
      <div className='app'>
        
        {/* <InitialAnimation /> */}

        <AnimatePresence>
            
            <Switch
              location={location} 
              key={location.pathname}
            >
                       
                <Route path='/oheya'>
                  <SubPageOheya />
                </Route>
              
                <Route path='/oryori'>
                  <SubPageOryori />
                </Route>
              
                <Route path='/onsen'>
                  <SubPageOnsen />
                </Route>                            

                <Route exact path='/'>
                  <Home />
                </Route>             
            
            </Switch> 

        </AnimatePresence>

      </div>
  );
}

export default App;
