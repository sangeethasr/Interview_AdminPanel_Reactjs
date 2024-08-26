import React from "react";
import { connect } from "react-redux";
import Logo from "../images/dashboardLogo.png";
import manageIcon from "../images/manageIcon.svg";
import dotsIcon from "../images/dotsIcon.png";
import Design from "./Sidebar.module.css";
import ProfileBadge from "../components/ProfileBadge";
import SearchInput from "../components/SearchInput";
import { CloseCircleOutlined } from "@ant-design/icons";
import { ALWAYS_OPEN, CLOSE_NAVBAR, OPEN_NAVBAR } from "../store/actions/navBarActions";


function Sidebar(props) {

  const mediaQuery = window.matchMedia("(min-width: 992px)");
  const handlemMediaQueryChanges = () => {
    if (mediaQuery.matches) {
      props.alwaysOpenNavbar(true, false);
    } else if (!mediaQuery.matches && !props.click) {
      props.onCloseNavBar(false, false);
    }
  };

  handlemMediaQueryChanges();
  mediaQuery.addListener(handlemMediaQueryChanges);

  const sideBar = document.querySelector(`.${Design.Sidebar}`);
  if (sideBar) {
    if (props.openNavbar) {
      sideBar.style.width = '15rem';
    } else if (props.openNavbar && props.click) {
      sideBar.style.width = '15rem';
    } else if (!props.openNavbar && !props.click) {
      sideBar.style.width = '0rem';
    }
  }

  return (
    <div className={Design.Sidebar}  style={{width : !props.click && !props.openNavbar ? "0px" : "15rem"}}>

      <div className={Design.profileSection}>
        <div>
          <ProfileBadge />
        </div>
        <div className={Design.closeSidebarIcon} onClick={()=>props.onCloseNavBar(false, false)}>
          <CloseCircleOutlined />
        </div>
      </div>

      <div className={Design.actionSection}>
        <SearchInput />
      </div>

      <div className={Design.logoContainer}>
        <img className={Design.logo} src={Logo} alt="Logo" />
      </div>

      <ul className={Design.sidebarList}>
        <li className={Design.listHeading}>Create</li>
        <li>
          <div className={Design.sidebarContent}>
            <img src={manageIcon}></img> CRM Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Sales Order Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Finanace Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            HR Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Procurement
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Asset Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Inventory Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Project Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Helpdesk Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Business Intelligencee
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Control Panel
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Application Settings
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Solution Builder
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Product & Services
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Suppliers & Customers
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Organization
          </div>
        </li>
        <li>
          <div className={Design.sidebarMoreBtn}>
            <img src={dotsIcon}></img>More items
          </div>
        </li>
        <li>
          <div className={Design.sidebarContentLogo}>
            <img className={Design.logo} src={Logo} alt="Logo" />
          </div>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    openNavbar: state.navBarReducer.openNavbar,
    click: state.navBarReducer.click,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenNavBar: (openNavbar, click) => dispatch({ type: OPEN_NAVBAR, openNavbar, click }),
    alwaysOpenNavbar: (openNavbar, click) => dispatch({ type: ALWAYS_OPEN, openNavbar, click }),
    onCloseNavBar: (openNavbar, click) => dispatch({ type: CLOSE_NAVBAR, openNavbar, click }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
