import React from 'react';

import './main.css';
// Components for Site Pages
import Home from './pages/Home/Home.js'
import SubPageOheya from './pages/SubPage/-Oheya/SubPageOheya';
import SubPageOryori from './pages/SubPage/-Oryori/SubPageOryori';
import SubPageOnsen from './pages/SubPage/-Onsen/SubPageOnsen';
// Components for communal parts
// Libraries
import {
  BrowserRouter,
  Switch,
  Route,  
} from "react-router-dom";


function App() {


  return (
    <BrowserRouter 
      basename="ishikadan"
  >
      <div className='app'>
        

        <Switch> 


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


      </div>
    </BrowserRouter>
  );
}

export default App;
