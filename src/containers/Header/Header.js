import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { LANGUAGES } from "../../utils/constant";
import { changeLanguage } from "../../store/actions";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  handleChangeLanguage = (language) => {
    //fire redux action
    this.props.setChangeLanguage(language);
  };
  render() {
    const { processLogout, userInfo } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        {/* language */}
        <div className="header-left">
          <div className="language">
            <span className="welcome">
              {/* <FormattedMessage id={"header.welcome"} /> */}
              <span>{`${userInfo?.firstName} ${userInfo?.lastName}`}</span>
            </span>
            <span
              className={`${this.props.lang === "vi" && "text-black"}`}
              onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>
              VN
            </span>
            <span
              className={`${this.props.lang === "en" && "text-black"}`}
              onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>
              EN
            </span>
          </div>
          {/* nút logout */}
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Logout">
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    setChangeLanguage: (language) => dispatch(changeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
