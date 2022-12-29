import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { changeLanguage } from "../../store/actions/appActions";
import { LANGUAGES } from "../../utils/constant";
import { withRouter } from "react-router";
import "./Header.scss";
class Header extends Component {
  handleChangeLanguage = (language) => {
    //fire redux action
    this.props.setChangeLanguage(language);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.isSticky);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.isSticky);
  }
  isSticky = (e) => {
    const header = document.querySelector(".home-header-container");
    const scrollTop = window.scrollY;
    scrollTop >= 77
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  //return to home
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push("/home");
    }
  };
  render() {
    const lang = this.props.lang;
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div
                className="header-logo"
                onClick={() => this.returnToHome()}></div>
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
                className={`cursor img-flag ${lang === "vi" && "text-blue"}`}>
                <img
                  src="https://png.pngtree.com/png-clipart/20210725/original/pngtree-irregular-dry-ink-brush-vietnam-flag-png-image_6563885.jpg"
                  alt=""
                />
              </span>
              <span
                onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                className={`cursor img-flag ${lang === "en" && "text-blue"}`}>
                <img
                  src="https://banner2.cleanpng.com/20180623/iwt/kisspng-flag-of-the-united-kingdom-flag-of-great-britain-e-northern-ireland-flags-issue-5b2efb1c7a74b4.9896211915298055965016.jpg"
                  alt=""
                />
              </span>
              <div className="txt-help img-flag">
                {" "}
                {/* <FormattedMessage id="header.Support"></FormattedMessage> */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbVIUlkVzZcItcnTiJDMkFw49AhfDepQ61ekj6sUY98IhWOckopYUIsN2g1R2p3NACv4&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {this.props.isShowBanner === true && (
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
                placeholder={
                  this.props.lang === "vi" ? "Tìm Kiếm" : "Searching"
                }
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
                  <i className="fas fa-user-shield"></i>
                </div>
                {this.props.lang === "en" ? "" : <div>Khám</div>}
                <FormattedMessage id="banner.children5"></FormattedMessage>
              </div>
              <div className="option">
                <div className="rounded-icons">
                  <i className="fas fa-venus-mars"></i>
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
                  <i className="fas fa-procedures"></i>
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
        )}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
