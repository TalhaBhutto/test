import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import Watched from './Components/Watched/Watched';
import Watchlist from './Components/Watchlist/Watchlist';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Container } from '@material-ui/core';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Watchlist" exact component={Watchlist} />
          <Route path="/Watched" exact component={Watched} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
