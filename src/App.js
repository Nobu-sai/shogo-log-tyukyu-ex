import './main.css';
// Components for Site Pages
import Home from './pages/Home/Home.js'
import SubPageRooms from './pages/SubPageRooms/SubPageRooms';
import SubPageFood from './pages/SubPageFood/SubPageFood';
import SubPageHotSpring from './pages/SubPageHotspring/SubPageHotspring';
// Components for communal parts
import Header from './blocks/0-1-Header/Header';
// Libraries
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let sitePageLinks = {
    'home': <Link to="/">Home</Link>,
    'subPageRooms': <Link to="/rooms">Rooms</Link>,
    'subPageFood': <Link to="/food">Food</Link>,
    'subPageHotspring': <Link to="/hotspring">Hotspring</Link>,
  }

  return (
    <Router>
      <div className="App">
        <Header sitePageLinks={sitePageLinks}/>

        <Switch> 

          <Route path="/rooms">
            <SubPageRooms />
          </Route>
          
          <Route path="/food">
            <SubPageFood />
          </Route>

          <Route path="/hotspring">
            <SubPageHotSpring />
          </Route>

          <Route path="/">
            <Home />
          </Route> 

        </Switch>

      </div>
    </Router>
  );
}

export default App;
