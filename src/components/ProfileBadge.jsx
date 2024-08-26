import React from "react";
import { Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";
import Design from "./ProfileBadge.module.css";

export default function ProfileBadge() {
  return (
    <div className={Design.userProfileBadge}>
      <div className={Design.userProfileInfo}>
        <h4 className="primaryHeading">Ms.Employee</h4>
        <p className="secondaryText">Product Manager</p>
      </div>
      <Avatar size={40} icon={<UserOutlined />} />
    </div>
  );
}
