import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { searchAd } from "../actions/searchActions/searchAd";

const Search = ({ searchAd, searchedWord }) => {
  const handelChange = e => {
    searchAd(e.target.value.toLowerCase());
  };

  return (
    <div className="container bg-info col-lg-3 col-md-6 col-9 mx-auto rounded-bottom p-3">
      <input
        onChange={e => handelChange(e)}
        placeholder="Search..."
        className="form-control"
        type="text"
        value={searchedWord}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchedWord: state.searchR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchAd: searchedWord => dispatch(searchAd(searchedWord))
  };
};

Search.propTypes = {
  searchAd: PropTypes.func
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
