import React from "react";
import { Link } from "react-router";

const WebsiteLogo = () => {
  return (
    <Link to="/">
      <img src="/assets/website_big_logo.png" alt="Website Logo" />
    </Link>
  );
};

export default WebsiteLogo;
