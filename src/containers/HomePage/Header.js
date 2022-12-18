import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.scss";
class Header extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i class="fas fa-bars"></i>
            <div className="header-logo"></div>
          </div>
          <div className="mid-content">
            <div className="child-content">
              <div className="txt-bold">Chuyên Khoa</div>
              <div className="txt-thin">Tìm bác Sĩ theo chuyên khoa</div>
            </div>
            <div className="child-content">
              <div className="txt-bold">Cơ sở Y tế</div>
              <div className="txt-thin">Chọn Phòng Khám</div>
            </div>
            <div className="child-content">
              <div className="txt-bold">bác Sĩ</div>
              <div className="txt-thin">Chọn Bác Sĩ Giỏi</div>
            </div>
            <div className="child-content">
              <div className="txt-bold">Goí Khám</div>
              <div className="txt-thin">Khám Sức KHỏe tổng quát</div>
            </div>
          </div>
          <div className="right-content">
            <div>VN</div>
            <div className="txt-help">Hổ Trợ</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
