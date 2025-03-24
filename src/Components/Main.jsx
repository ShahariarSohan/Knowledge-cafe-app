import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";

const Main = () => {
  return (
    <div className="flex justify-between items-center container mx-auto">
      <Blogs className="w-2/3"></Blogs>
      <Bookmarks className="w-1/3"></Bookmarks>
    </div>
  );
};

export default Main;
