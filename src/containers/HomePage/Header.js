import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { changeLanguage } from "../../store/actions/appActions";
import { LANGUAGES } from "../../utils/constant";
import "./Header.scss";
class Header extends Component {
  handleChangeLanguage = (language) => {
    //fire redux action
    this.props.setChangeLanguage(language);
  };
  render() {
    const lang = this.props.lang;
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i class="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="mid-content">
              <div className="child-content">
                <div className="txt-bold">
                  {" "}
                  <FormattedMessage id="header.speciality"></FormattedMessage>
                </div>
                <div className="txt-thin">
                  <FormattedMessage id="header.search-doctor"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div className="txt-bold">
                  {" "}
                  <FormattedMessage id="header.Health-facilities"></FormattedMessage>
                </div>
                <div className="txt-thin">
                  {" "}
                  <FormattedMessage id="header.Choose-a-Clinic"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div className="txt-bold">
                  {" "}
                  <FormattedMessage id="header.Doctor"></FormattedMessage>
                </div>
                <div className="txt-thin">
                  {" "}
                  <FormattedMessage id="header.Doctor-good"></FormattedMessage>
                </div>
              </div>
              <div className="child-content">
                <div className="txt-bold">
                  {" "}
                  <FormattedMessage id="header.Fee"></FormattedMessage>
                </div>
                <div className="txt-thin">
                  {" "}
                  <FormattedMessage id="header.General-health-check"></FormattedMessage>
                </div>
              </div>
            </div>
            <div className="right-content">
              <span
                onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
                className={`cursor ${lang === "vi" && "text-blue"}`}>
                VN
              </span>
              <span
                onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                className={`cursor ${lang === "en" && "text-blue"}`}>
                EN
              </span>
              <div className="txt-help">
                {" "}
                <FormattedMessage id="header.Support"></FormattedMessage>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-container">
          <div className="banner-header">
            <div className="title1">
              {" "}
              <FormattedMessage id="banner.title1"></FormattedMessage>
            </div>
            <div className="title2">
              {" "}
              <FormattedMessage id="banner.title2"></FormattedMessage>
            </div>
          </div>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Tìm Kiếm..."
            />
          </div>
          <div className="banner-footer">
            <div className="option">
              <div className="rounded-icons">
                <i className="far fa-hospital"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <div>
                <FormattedMessage id="banner.children1"></FormattedMessage>
              </div>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i className="fas fa-mobile-alt"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children2"></FormattedMessage>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i className="far fa-address-book"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children3"></FormattedMessage>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i className="fas fa-tv"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children4"></FormattedMessage>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i class="fas fa-user-shield"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children5"></FormattedMessage>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i class="fas fa-venus-mars"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children6"></FormattedMessage>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i className="fas fa-stethoscope"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children7"></FormattedMessage>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i class="fas fa-procedures"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children8"></FormattedMessage>
            </div>
            <div className="option">
              <div className="rounded-icons">
                <i className="fas fa-wheelchair"></i>
              </div>
              {this.props.lang === "en" ? "" : <div>Khám</div>}
              <FormattedMessage id="banner.children9"></FormattedMessage>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setChangeLanguage: (language) => dispatch(changeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
