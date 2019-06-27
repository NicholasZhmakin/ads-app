import React from "react";
import LoginForm from "./Auth/LoginForm";
import AdsList from "./Ad/AdsList";
import SearchAd from "./SearchAd";

const Home = () => {
  return (
    <React.Fragment>
      <LoginForm />
      <SearchAd />
      <AdsList />
    </React.Fragment>
  );
};

export default Home;
