// Libraries
import { React, useState, useEffect } from 'react';
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

  const [isSiteFirstMount, setIsSiteFirstMount] = useState(true);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unlisten = history.listen(() => {
      isSiteFirstMount && setIsSiteFirstMount(false);
    });
    return unlisten;
  }, [history, isSiteFirstMount]);
  

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
                  <Home 
                    isSiteFirstMount={isSiteFirstMount}
                  />
                </Route>             
            
            </Switch> 

        </AnimatePresence>

      </div>
  );
}

export default App;
