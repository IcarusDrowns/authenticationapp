import React, { useContext } from "react";

import UserProvider from "../../contexts/UserProvider";

import _ from "lodash";

import LogoutIcon from "@material-ui/icons/MeetingRoom";

const MenuBar = () => {
  const userData = useContext(UserProvider.context);

  return (
    <div className="menu-bar">
      {!_.isEmpty(userData) && (
        <a
          className="btn menu-btn"
          href={"/auth/logout"}
          title="Logout"
          style={{ float: "right" }}
        >
          <LogoutIcon />
        </a>
      )}
    </div>
  );
};

export default MenuBar;
