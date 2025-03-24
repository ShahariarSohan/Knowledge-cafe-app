import React from "react";
import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog }) => {
  const {
    blog_img,
    blog_title,
    author_img,
    author_name,
    publish_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-5 mb-10">
      <img className="w-full rounded-md" src={blog_img} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <div>
            <img className="w-10" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="font-bold">{author_name}</h3>
            <p className="text-sm text-slate-500">{publish_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-slate-500">{reading_time} minutes</p>
          <button>
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{blog_title}</h1>
      <div className="flex items-center gap-2">
        {hashtags.map((hashtag) => (
          <p className="text-sm text-slate-500">{hashtag}</p>
        ))}
      </div>
      <button>
        <a className="underline">Mark as read</a>
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
