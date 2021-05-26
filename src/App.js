// import { useState, useEffect } from 'react';

import './main.css';
// Components for Site Pages
import Home from './pages/Home/Home.js'
import SubPageOheya from './pages/SubPage/-Oheya/SubPageOheya';
import SubPageOryori from './pages/SubPage/-Oryori/SubPageOryori';
import SubPageOnsen from './pages/SubPage/-Onsen/SubPageOnsen';
import ReservationModal from './pages/ReservationModal/ReservationModal';
// Components for communal parts
// Libraries
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";


function App() {
  return (
    <Router>
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

          <Route path='/yoyaku'>
            <ReservationModal />
          </Route>

          <Route path='/'>
            <Home />
          </Route> 
          

        </Switch>


      </div>
    </Router>
  );
}

export default App;
