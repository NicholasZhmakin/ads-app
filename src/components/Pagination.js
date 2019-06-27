import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrentPage } from "../actions/pagesActions/setCurrentPage";
import { prevPage } from "../actions/pagesActions/prevPage";
import { nextPage } from "../actions/pagesActions/nextPage";

const Pagination = ({
  adsPerPage,
  totalAds,
  currentPage,
  setCurrentPage,
  prevPage,
  nextPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAds / adsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={
        totalAds <= adsPerPage ? "d-none" : "row justify-content-center"
      }
    >
      <nav>
        <ul className="pagination m-auto">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <a className="page-link" onClick={() => prevPage()}>
              Previous
            </a>
          </li>
          {pageNumbers.map(number => (
            <li
              key={number}
              className={
                currentPage === number ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => setCurrentPage(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
          <li
            className={
              currentPage === pageNumbers.length
                ? "page-item disabled"
                : "page-item"
            }
          >
            <a className="page-link" onClick={() => nextPage()}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPage: number => dispatch(setCurrentPage(number)),
    prevPage: () => dispatch(prevPage()),
    nextPage: () => dispatch(nextPage())
  };
};

Pagination.propTypes = {
  setCurrentPage: PropTypes.func,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(Pagination);
