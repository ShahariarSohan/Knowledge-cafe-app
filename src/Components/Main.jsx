import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";

const Main = () => {
  return (
    <div className="flex justify-between  container mx-auto">
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </div>
  );
};

export default Main;
