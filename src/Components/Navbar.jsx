import React from "react";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center container mx-auto py-5">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src="./images/profile.png"></img>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
