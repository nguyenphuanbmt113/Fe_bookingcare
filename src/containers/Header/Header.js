import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import Navigator from "../../components/Navigator";
import * as actions from "../../store/actions";
import { changeLanguage } from "../../store/actions";
import { LANGUAGES, USER_ROLE } from "../../utils/constant";
import "./Header.scss";
import { adminMenu, doctorMenu } from "./menuApp";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuApp: [],
    };
  }
  handleChangeLanguage = (language) => {
    //fire redux action
    this.props.setChangeLanguage(language);
  };
  componentDidMount() {
    let { userInfo } = this.props;
    let menu = [];
    if (userInfo && !_.isEmpty(userInfo)) {
      let role = userInfo.roleId;
      if (role === USER_ROLE.ADMIN) {
        menu = adminMenu;
      }
      if (role === USER_ROLE.DOCTOR) {
        menu = doctorMenu;
      }
    }
    this.setState({
      menuApp: menu,
    });
  }
  render() {
    const { processLogout } = this.props;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={this.state.menuApp} />
        </div>
        {/* language */}
        <div className="header-left">
          <div className="language">
            <span
              className={`img-flag ${this.props.lang === "vi" && "text-black"}`}
              onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>
              <img
                src="https://png.pngtree.com/png-clipart/20210725/original/pngtree-irregular-dry-ink-brush-vietnam-flag-png-image_6563885.jpg"
                alt=""
              />
            </span>
            <span
              className={`img-flag ${this.props.lang === "en" && "text-black"}`}
              onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>
              <img
                src="https://banner2.cleanpng.com/20180623/iwt/kisspng-flag-of-the-united-kingdom-flag-of-great-britain-e-northern-ireland-flags-issue-5b2efb1c7a74b4.9896211915298055965016.jpg"
                alt=""
              />
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
