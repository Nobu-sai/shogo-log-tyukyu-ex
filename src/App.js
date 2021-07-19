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



const App = () => {

  const [isSiteFirstMount, setIsSiteFirstMount] = useState(true);
  const history = useHistory();
  const location = useLocation();

  
  

  // Prevent MULTIPLE time execution of Initial Animation.
  // = After the history Object is updated. 
  useEffect(() => {
    history.listen(() => {
      isSiteFirstMount && setIsSiteFirstMount(false);
    });
    
  }, [history]);
  


    const pageVariants = () => {
      // console.log('exit')

      return {        
        exit: {
          opacity: 0,          
        }
      }
    }

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
        y: '-20vh',
        width: '100%',
        height: '100%'
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 3.0,
          delay: isSiteFirstMount ? 4.0 : 0,
          // duration and delay Properties.
            // : This time is the LEAST requirement, otherwise the scrolling is done AFTER the animation was done.
              // : This is for the sake of reserving enoughtime used by scrolling to the top AFTER the Initial Animation AFTER REFRESHING a page)
                // * The scrolling is done by window.scrollToTop() Called from Header/scrollToTop() Called from Header/controllScrollingUnderneath()), 
                //   Meaning, the MIDWAY page contents is seen a little.
                  // * This seems the matter of the process order of Browser Stack.
                    //  * https://www.evernote.com/shard/s350/nl/180370944/6856dfde-0ed2-3837-6868-3b8c166e4adc?title=(Shogo)%20%E4%B8%AD%E7%B4%9AEx/%22Issue%22%20=%20Cannot%20scroll%20to%20the%20TOP%20of%20page%20AFTER%20Reloading%20the%20page. / Research.2
          ease: [0.6, 0.05, 0.02, 0.99],
        },
      }

    })
    
    

  return (
      <div className='app'>
                

        <AnimatePresence>
            
            <Switch
              location={location}              
                // Without this the exit animation somehow does NOT work. 
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
