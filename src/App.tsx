import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SingleCountryPage from "./Pages/SingleCountryPage";

function App() {

  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route
            exact
            path="/:countryName"
            component={SingleCountryPage}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
