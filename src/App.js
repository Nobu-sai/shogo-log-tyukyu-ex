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
  


    const pageVariants = () => ({ 
      exit: {
        opacity: 0 
      }
    })

    const pageContainerVariants = () => ({
      initial: {
        // opacity: 0       
        width: '100%',
        height: '100%'
      },
      animate: {
        // opacity: 1,
        animate: {
          transition: { 
            staggerChildren: 1.0, 
            // delayChildren: 2.8 
          },
        },
      },

    })

    const pageContentsVariants = (isSiteFirstMount) => ({
      initial: {
        opacity: 0,
        y: '-100vh',
        width: '100%',
        height: '100%'
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: isSiteFirstMount ? 2.2 : 0,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      }

    })
    

  return (
      <div className='app'>
        
        {/* <InitialAnimation /> */}

        <AnimatePresence>
            
            <Switch
              location={location} 
              key={location.pathname}
            >
                       
                <Route path='/oheya'>
                  <SubPageOheya 
                    isSiteFirstMount={isSiteFirstMount}  
                    pageVariants={pageVariants}
                    pageContainerVariants={pageContainerVariants}
                    pageContentsVariants={pageContentsVariants}                  
                  />
                </Route>
              
                <Route path='/oryori'>
                  <SubPageOryori 
                    isSiteFirstMount={isSiteFirstMount}
                    pageVariants={pageVariants}
                    pageContainerVariants={pageContainerVariants}
                    pageContentsVariants={pageContentsVariants}
                  />
                </Route>
              
                <Route path='/onsen'>
                  <SubPageOnsen 
                    isSiteFirstMount={isSiteFirstMount}
                    pageVariants={pageVariants}
                    pageContainerVariants={pageContainerVariants}
                    pageContentsVariants={pageContentsVariants}
                  />
                </Route>                            

                <Route exact path='/'>
                  <Home 
                    isSiteFirstMount={isSiteFirstMount}
                    pageVariants={pageVariants}
                    pageContainerVariants={pageContainerVariants}
                    pageContentsVariants={pageContentsVariants}
                  />
                </Route>             
            
            </Switch> 

        </AnimatePresence>

      </div>
  );
}

export default App;
