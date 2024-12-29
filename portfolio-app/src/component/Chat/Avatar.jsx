import React, { useState } from "react";
import img from "../../images/me2.jpg";
import "./style.css";

const Avatar = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="avatar-container">
      <div className="avatar-p" style={{ opacity: hovered ? "1" : "0" }}>
        Hi, it's Avi!
      </div>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        // trigger only if the prop on click is present
        onClick={() => onClick && onClick()}
      >
        <img
          className="avatar"
          style={{
            border: hovered
              ? " 2px solid #fff"
              : "2px solid var( --red-sharp-color)",
          }}
          src={img}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
