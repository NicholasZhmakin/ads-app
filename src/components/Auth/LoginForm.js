import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkUser } from "../../actions/authActions/checkUser";
import { logout } from "../../actions/authActions/logout";

const LoginFrom = ({
  authorization,
  checkUser,
  logout,
  currentUser,
  error
}) => {
  const [token, setToken] = useState({
    id: "",
    username: "",
    password: ""
  });

  const handelChange = e => {
    const id = uuid.v4();
    setToken({
      ...token,
      id: id,
      [e.target.id]: e.target.value
    });
  };

  const handleLogin = () => {
    const pattern = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
    const regex = new RegExp(pattern, "gi");
    if (!token.username || !token.password) {
      alert("The fields cant be empty");
      return false;
    }
    if (!token.password.match(regex)) {
      alert(
        "Password must contain at least one letter, at least one number, and be longer than five charaters."
      );
      setToken({
        ...token,
        password: ""
      });
      return false;
    } else {
      checkUser(token);
      setToken({
        ...token,
        password: ""
      });
    }
  };

  if (!authorization) {
    return (
      <div className="container col-lg-3 col-md-6 col-9 bg-info p-3 rounded-top">
        <label className="col-form-label text-light font-weight-bold">
          Username:
        </label>
        <input
          onChange={handelChange}
          id="username"
          className="form-control"
          value={token.username || ""}
          type="text"
        />

        <label className="col-form-label text-light font-weight-bold">
          Password:
        </label>
        <input
          onChange={handelChange}
          id="password"
          className="form-control"
          value={token.password || ""}
          type="password"
        />

        <button
          onClick={() => handleLogin()}
          className="btn btn-warning mt-4 mx-auto p-2 font-weight-bold d-block"
        >
          Login
        </button>
      </div>
    );
  } else {
    return (
      <div className="container col-lg-3 col-md-6 col-9 bg-info p-3 rounded-top">
        <h2 className="text-light font-weight-bold text-center my-3 d-block">
          Welcome,
          <span className="text-warning"> {currentUser.username}</span>
        </h2>

        <button
          onClick={() => logout()}
          className="btn btn-warning my-2 mx-auto p-2 font-weight-bold d-block"
        >
          Logout
        </button>

        <Link style={{ textDecoration: "none" }} to={"/create"}>
          <button
            disabled={error}
            className="btn btn-success border border-light mt-5 mx-auto p-3 font-weight-bold d-block"
          >
            Create Ad
          </button>
        </Link>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    authorization: state.authR.authorization,
    currentUser: state.authR.currentUser,
    error: state.adsR.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkUser: user => dispatch(checkUser(user)),
    logout: () => dispatch(logout())
  };
};

LoginFrom.propTypes = {
  authorization: PropTypes.bool,
  currentUser: PropTypes.object,
  checkUser: PropTypes.func,
  logout: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFrom);
