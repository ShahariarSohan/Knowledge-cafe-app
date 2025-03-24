import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 bg-slate-50 rounded-md">
      <h1 className="text-3xl font-bold text-center">Bookmarks Blogs</h1>
      <h1 className="text-2xl font-bold text-center">
        Reading Time:{readingTime}
      </h1>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
