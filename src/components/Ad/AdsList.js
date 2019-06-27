import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Ad from "./Ad";
import Pagination from "../Pagination";
import { initAds } from "../../actions/adActions/initAds";
import { toFirstPage } from "../../actions/pagesActions/toFirstPage";

const AdsList = ({
  ads,
  currentPage,
  toFirstPage,
  initAds,
  error,
  loading
}) => {
  // Make request for data
  useEffect(() => {
    if (ads.length === 0) {
      initAds();
    }
  }, []);
  /* */

  // Slice for pagination
  const adsPerPage = 5;
  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);
  /* */

  // Checking for loading or error
  let adslist;
  if (loading) {
    adslist = (
      <div className="bg-warning p-3 text-light font-weight-bold text-center">
        Loading please wait....
      </div>
    );
  } else if (error) {
    adslist = (
      <div className="bg-danger p-3 text-light font-weight-bold text-center">
        Something went wrong....sorry. <br />
        Cant load ads from server.
      </div>
    );
  } else {
    // Checking if it is any ads exist
    adslist = ads.length ? (
      currentAds.map(ad => <Ad key={ad.id} ad={ad} />)
    ) : (
      <h2 className="text-center text-dark">No ads to show</h2>
    );
  }
  /* */

  // Move to first page if all ads on last page was deleted
  if (currentAds.length === 0 && ads.length !== 0) {
    toFirstPage();
  }
  /* */

  return (
    <React.Fragment>
      <div className="my-4">
        <div className="row justify-content-center">{adslist}</div>
      </div>
      <Pagination
        adsPerPage={adsPerPage}
        totalAds={ads.length}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ads: state.adsR.ads.filter(ad =>
      JSON.stringify(ad)
        .toLowerCase()
        .includes(state.searchR)
    ),
    currentPage: state.pageR.currentPage,
    error: state.adsR.error,
    loading: state.adsR.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toFirstPage: () => dispatch(toFirstPage()),
    initAds: () => dispatch(initAds())
  };
};

AdsList.propTypes = {
  ads: PropTypes.array,
  currentPage: PropTypes.number,
  toFirstPage: PropTypes.func,
  initAds: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsList);
