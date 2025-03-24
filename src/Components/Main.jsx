import { useState } from "react";
import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";
import { utility } from "../Utilities/Utility";

const Main = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  const handleMarkAsRead = (reading_time) => {
    setReadingTime(utility(reading_time));
  };
  return (
    <div className="flex justify-between gap-5 container mx-auto">
      <Blogs
        handleBookmark={handleBookmark}
        handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
  );
};

export default Main;
