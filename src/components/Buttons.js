import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAd } from "../actions/adActions/deleteAd";
import { withRouter } from "react-router-dom";

const Buttons = props => {
  let controlBtns;
  const { ad, currentUser } = props;
  const handleDelete = () => {
    props.deleteAd(ad.id);
    props.history.push("/");
  };

  const handleEdit = () => {
    props.history.push("/edit/" + ad.id);
  };

  if (currentUser === null) {
    controlBtns = null;
  }
  if (currentUser !== null) {
    if (ad.author === currentUser.username) {
      controlBtns = (
        <div className="row justify-content-center mt-5">
          <button
            className="btn btn-secondary mx-1"
            onClick={() => handleEdit()}
          >
            Edit Ad
          </button>

          <button
            className="btn btn-danger mx-1"
            onClick={() => handleDelete()}
          >
            Delete Ad
          </button>
        </div>
      );
    } else {
      controlBtns = (
        <div className="row justify-content-center mt-5">
          <button
            className="btn btn-secondary mx-1"
            onClick={() => handleEdit()}
          >
            Edit Ad
          </button>
        </div>
      );
    }
  }

  return <React.Fragment>{controlBtns}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    currentUser: state.authR.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAd: id => dispatch(deleteAd(id))
  };
};

Buttons.propTypes = {
  currentUser: PropTypes.object,
  adAuthor: PropTypes.string,
  ad: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Buttons)
);
