import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editAd } from "../../actions/adActions/editAd";
import { Link, Redirect } from "react-router-dom";

const EditAd = props => {
  const { ad, editAd, currentUser } = props;
  const [editedAd, setEditedAd] = useState({
    id: ad.id,
    title: ad.title,
    description: ad.description
  });

  const handelChange = e => {
    setEditedAd({
      ...editedAd,
      [e.target.id]: e.target.value
    });
  };

  const handleClick = () => {
    if (!editedAd.title || !editedAd.description) {
      alert("The fields cant be empty");
      return false;
    } else {
      editAd(editedAd);
      setEditedAd({
        ...editedAd,
        id: "",
        title: "",
        description: ""
      });
      props.history.push("/details/" + editedAd.id);
    }
  };

  let redirect = null;
  if (ad.author !== currentUser.username) {
    redirect = <Redirect to="/" />;
  }

  return (
    <div className="container col-lg-4 col-md-7 col-9 mt-5 bg-dark p-3 shadow rounded-top">
      {redirect}
      <label className="col-form-label text-light font-weight-bold">
        Title:
      </label>
      <input
        id="title"
        onChange={handelChange}
        className="form-control"
        value={editedAd.title || ""}
        type="text"
      />

      <label className="col-form-label text-light font-weight-bold">
        Description:
      </label>
      <textarea
        id="description"
        onChange={handelChange}
        className="form-control"
        value={editedAd.description || ""}
        type="text"
      />

      <button
        onClick={handleClick}
        className="btn btn-warning mt-2 p-2 font-weight-bold d-block mx-auto"
      >
        Save
      </button>

      <Link style={{ textDecoration: "none" }} to={"/"}>
        <button className="btn btn-primary p-2 font-weight-bold d-block ">
          <i className="far fa-hand-point-left" /> Back
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.edit_id;
  return {
    ad: state.adsR.ads.find(ad => ad.id === id),
    currentUser: state.authR.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editAd: newEditedAd => dispatch(editAd(newEditedAd))
  };
};

EditAd.propTypes = {
  ad: PropTypes.object,
  editAd: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAd);
