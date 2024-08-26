import React from "react";
import { Badge, Avatar } from "antd";
import {
  BellOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import ProfileBadge from "../components/ProfileBadge";
import SearchInput from "../components/SearchInput";
import Design from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={Design.topbar}>
      <div className={Design.topbarActions}>
       
       <SearchInput />

        <ul className={Design.topbarAlerts}>
          <li>
            <QuestionCircleOutlined />
            {" "}
            Help
          </li>
          <li>
            <Badge count={5}>
              <Avatar icon={<BellOutlined />} shape="circle" size={30} />
            </Badge>
            {" "}
            Alerts
          </li>
          <li>
            <Badge count={5}>
              <Avatar icon={<MailOutlined />} shape="circle" size={30} />
            </Badge>
            {" "}
            Email
          </li>
        </ul>
      </div>

          <ProfileBadge />
      
    </div>
  );
}
