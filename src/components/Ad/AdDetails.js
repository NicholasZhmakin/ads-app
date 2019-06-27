import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";

const AdDetails = ({ ad }) => {
  return (
    <div className="container col-6">
      <div className="card mt-5 border border-dark rounded shadow-lg">
        <div className="card-header text-center bg-success">
          <h2 className="text-center text-light font-weight-bold text-capitalize">
            {ad.title}
          </h2>
          <h4 className="text-center font-italic">
            Author: <span className="text-warning">{ad.author}</span>
          </h4>
        </div>
        <div className="card-body">
          <p className="card-text text-justify">{ad.description}</p>
          <Buttons ad={ad} />
        </div>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <button className="btn btn-primary m-2 p-2 font-weight-bold d-block">
            <i className="far fa-hand-point-left" /> Back
          </button>
        </Link>
        <span className="card-text text-right m-2">{ad.creationDate}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.ad_id;
  return {
    ad: state.adsR.ads.find(ad => ad.id === id)
  };
};

AdDetails.propTypes = {
  ad: PropTypes.object
};

export default connect(mapStateToProps)(AdDetails);
