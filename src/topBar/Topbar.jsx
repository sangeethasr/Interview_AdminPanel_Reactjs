import React from "react";
import { connect } from "react-redux";
import { Badge, Avatar } from "antd";
import {
  BellOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Logo from "../images/dashboardLogo.png";
import ProfileBadge from "../components/ProfileBadge";
import SearchInput from "../components/SearchInput";
import Design from "./Topbar.module.css";
import { OPEN_NAVBAR } from "../store/actions/navBarActions";

function Topbar(props) {
  return (
    <div className={Design.topbar}>
      <div className={Design.mobileTopbar}>
        <div
          className={Design.openSidebarBtn}
          onClick={() => {
            props.onOpenNavBar(true, true);
          }}
        >
          <MenuOutlined />
        </div>
        <img src={Logo} className={Design.topbarLogo} />
      </div>

      <div className={Design.topbarActions}>
        <SearchInput />

        <ul className={Design.topbarAlerts}>
          <li>
            <QuestionCircleOutlined /> Help
          </li>
          <li>
            <Badge count={5}>
              <Avatar icon={<BellOutlined />} shape="circle" size={30} />
            </Badge>{" "}
            Alerts
          </li>
          <li>
            <Badge count={5}>
              <Avatar icon={<MailOutlined />} shape="circle" size={30} />
            </Badge>{" "}
            Email
          </li>
        </ul>
      </div>

      <div className={Design.ProfileBadgeContainer}>
        <ProfileBadge />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenNavBar: (openNavbar, click) =>
      dispatch({ type: OPEN_NAVBAR, openNavbar, click }),
  };
};

export default connect(null, mapDispatchToProps)(Topbar);
