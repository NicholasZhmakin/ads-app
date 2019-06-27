import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import { connect } from "react-redux";
import { createAd } from "../../actions/adActions/createAd";
import { Link } from "react-router-dom";

const CreateAd = props => {
  const [newAd, setNewAd] = useState({
    id: "",
    title: "",
    description: "",
    author: "",
    creationDate: ""
  });

  const { username, createAd } = props;

  const timeConverter = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const d = new Date();
    const day = days[d.getDay()];
    let hr = d.getHours();
    let min = d.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    let ampm = " am";
    if (hr > 12) {
      hr -= 12;
      ampm = " pm";
    }
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${date} ${month} ${year} ${day} ${hr}:${min}${ampm}`;
  };

  const handelChange = e => {
    const creationDate = timeConverter();
    const id = uuid.v4();
    setNewAd({
      ...newAd,
      id,
      [e.target.id]: e.target.value,
      author: username,
      creationDate
    });
  };

  const handleClick = () => {
    if (!newAd.title || !newAd.description) {
      alert("The fields cant be empty");
      return false;
    } else {
      createAd(newAd);
      setNewAd({
        ...newAd,
        id: "",
        title: "",
        description: "",
        author: "",
        creationDate: ""
      });
      props.history.push("/details/" + newAd.id);
    }
  };

  return (
    <div className="container col-lg-4 col-md-7 col-9 mt-5 bg-dark p-3 shadow rounded-top">
      <label className="col-form-label text-light font-weight-bold">
        Title:
      </label>
      <input
        id="title"
        onChange={handelChange}
        className="form-control"
        value={newAd.title || ""}
        type="text"
      />

      <label className="col-form-label text-light font-weight-bold">
        Description:
      </label>
      <textarea
        id="description"
        onChange={handelChange}
        className="form-control"
        value={newAd.description || ""}
        type="text"
      />

      <button
        onClick={handleClick}
        className="btn btn-success my-3 p-2 font-weight-bold d-block mx-auto"
      >
        Create Ad
      </button>

      <Link style={{ textDecoration: "none" }} to={"/"}>
        <button className="btn btn-primary p-2 font-weight-bold d-block ">
          <i className="far fa-hand-point-left" /> Back
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.authR.currentUser.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAd: newAd => dispatch(createAd(newAd))
  };
};

CreateAd.propTypes = {
  username: PropTypes.string,
  createAd: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAd);
