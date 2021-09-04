import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        title="2"
        src="https://www.euronews.com/embed/timeline"
        scrolling="no"
        style={{ border: "none" }}
        width="340"
        height="21.5%"
      ></iframe>
      <iframe
        title="1"
        width="340"
        height="78.5%"
        frameborder="2"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://arcgis.com/apps/View/index.html?appid=6b6a075eca8d4899958fb273710a6806"
      ></iframe>
    </div>
  );
};

export default Widgets;
