import { useState } from "react";
import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";

const Main = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (title) => {
    setBookmarks([...bookmarks, title]);
  };
  return (
    <div className="flex justify-between gap-5 container mx-auto">
      <Blogs handleBookmark={handleBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
  );
};

export default Main;
