import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.euronews.com/embed/timeline"
        scrolling="no"
        style={{ border: "none" }}
        width="340"
        height="100%"
        scrolling="true"
      ></iframe>
    </div>
  );
};

export default Widgets;
