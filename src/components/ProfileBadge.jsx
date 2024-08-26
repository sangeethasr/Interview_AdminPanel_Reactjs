import React from "react";
import { Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";
import Design from "./ProfileBadge.module.css";

export default function ProfileBadge() {
  return (
    <div className={Design.userProfileBadge}>
      <div className={Design.userProfileInfo}>
        <h4>Ms.Employee</h4>
        <p>Product Manager</p>
      </div>
      <Avatar size={40} icon={<UserOutlined />} />
    </div>
  );
}
