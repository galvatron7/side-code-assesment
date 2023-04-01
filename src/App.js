import './App.css';

import PropertyListings from "./PropertyListings";
import SavedListings from "./SavedListings";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={PropertyListings} />
          <Route exact path="/saved" component={SavedListings} />
        </Switch>
      </Router>
  );
}

export default App;
