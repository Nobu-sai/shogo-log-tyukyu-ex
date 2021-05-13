import './main.css';
// Components for Site Pages
import Home from './pages/Home/Home.js'
import SubPageOheya from './pages/SubPage/SubPageOheya/SubPageOheya';
import SubPageOryori from './pages/SubPage/SubPageOryori/SubPageOryori';
import SubPageOnsen from './pages/SubPage/SubPageOnsen/SubPageOnsen';
// Components for communal parts
import Header from './blocks/Header/Header';
import Footer from './blocks/Footer/Footer'
// Libraries
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />

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

          <Route path='/'>
            <Home />
          </Route> 

        </Switch>


      </div>
    </Router>
  );
}

export default App;
