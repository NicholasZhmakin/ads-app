import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import CreateAd from "./components/Ad/CreateAd";
import AdDetails from "./components/Ad/AdDetails";
import EditAd from "./components/Ad/EditAd";
import Default from "./components/Default";

const App = ({ currentUser }) => {
  return (
    <Router>
      <div className="m-3 p-3">
        <Switch>
          <Route exact path="/" component={Home} />

          {currentUser !== null ? (
            <Route exact path="/create" component={CreateAd} />
          ) : null}

          <Route exact path="/details/:ad_id" component={AdDetails} />

          <Route exact path="/edit/:edit_id" component={EditAd} />
          <Route component={Default} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.authR.currentUser
  };
};

export default connect(mapStateToProps)(App);
