import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_icon"
            src="https://images-platform.99static.com//5fVeexjJRN_kWQ709H5m_3-LniY=/0x0:1024x1024/fit-in/590x590/projects-files/30/3049/304958/43fd7dbe-c8f4-4337-b066-934b7827039b.jpg"
          />
          
        </Link>
        <Link to="/movie/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movie/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movie/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
