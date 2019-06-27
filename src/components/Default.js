import React from "react";

const Default = props => {
  return (
    <div className="container bg-danger text-light text-uppercase text-center">
      <div className="row">
        <div className="col-10 mx-auto pt-5">
          <h1>404</h1>
          <h2>error</h2>
          <h3>page not found</h3>
          <h4>
            the requester URL
            <span className="text-dark">{props.location.pathname} </span>
            was not found
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Default;
