import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-slate-50 p-5">
      <h2 className="text-3xl font-bold">{bookmark}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
