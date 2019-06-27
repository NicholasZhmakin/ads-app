import React from "react";
import PropTypes from "prop-types";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";

const Ad = ({ ad }) => {
  return (
    <div className="col-lg-3 col-md-5 col-9 m-2">
      <div className="card border border-dark rounded shadow-lg">
        <div className="card-header text-center bg-success">
          <Link style={{ textDecoration: "none" }} to={"/details/" + ad.id}>
            <h3 className="text-light font-weight-bold text-capitalize">
              {ad.title}
            </h3>
          </Link>
          <h5 className="font-italic">
            Author: <span className="text-warning">{ad.author}</span>
          </h5>
        </div>
        <div className="card-body">
          <p className="text-justify">{ad.description}</p>
          <Buttons ad={ad} />
        </div>
        <span className="text-right m-2">{ad.creationDate}</span>
      </div>
    </div>
  );
};

Ad.propTypes = {
  ad: PropTypes.object
};

export default Ad;
