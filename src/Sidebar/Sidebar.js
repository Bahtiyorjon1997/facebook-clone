import { ExpandMoreOutlined } from "@material-ui/icons";
import "./Sidebar.css";
// import userEvent from "@testing-library/user-event";
import React from "react";
import SidebarRow from "./SidebarRow/SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg"
        title="Goody Rovana"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
