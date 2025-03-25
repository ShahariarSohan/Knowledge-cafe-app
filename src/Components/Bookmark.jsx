import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { blog_title } = bookmark;
  return (
    <div className="bg-slate-50 p-2">
      <h2 className="text-2xl font-bold">{blog_title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
