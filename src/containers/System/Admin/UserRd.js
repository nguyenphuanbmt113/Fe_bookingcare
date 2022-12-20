import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import "./UserRd.scss";
import { getAllcodesBytype } from "../../../services/userService";
class UserRd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderData: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await getAllcodesBytype("gender");
      console.log("res", res);
      if (res?.data?.EC === 0) {
        this.setState({
          genderData: res?.data?.DT,
        });
      }
    } catch (error) {
      console.log(">>>>>check error:", error);
    }
  }

  render() {
    let genderData = this.state.genderData;
    return (
      <div className="userrd-container">
        <div className="title mb-3">
          {" "}
          <FormattedMessage id="menu.manage-user.manage-user"></FormattedMessage>
        </div>
        <div className="user-body">
          <div className="container-add">
            <form className="row g-3">
              <div className="col-3">
                <label className="form-label">
                  {" "}
                  <FormattedMessage id="menu.manage-user.email"></FormattedMessage>
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-3">
                <label className="form-label">
                  {" "}
                  <FormattedMessage id="menu.manage-user.password"></FormattedMessage>
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="col-3">
                <label className="form-label">
                  {" "}
                  <FormattedMessage id="menu.manage-user.firstName"></FormattedMessage>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3">
                <label className="form-label">
                  {" "}
                  <FormattedMessage id="menu.manage-user.lastName"></FormattedMessage>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3">
                <label className="form-label">
                  {" "}
                  <FormattedMessage id="menu.manage-user.phone"></FormattedMessage>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3">
                <label className="form-label">
                  {" "}
                  <FormattedMessage id="menu.manage-user.address"></FormattedMessage>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-3">
                <label className="form-label">
                  <FormattedMessage id="menu.manage-user.gender"></FormattedMessage>
                </label>
                <select className="form-select">
                  {genderData &&
                    genderData.length > 0 &&
                    genderData.map((item) => {
                      return (
                        <option
                          key={
                            item.id
                          }>{this.props.lang === "vi" ? item.valueVi : item.valueEn}</option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3">
                <label className="form-label">
                  {" "}
                  <FormattedMessage id="menu.manage-user.role"></FormattedMessage>
                </label>
                <select className="form-select">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-3">
                <label className="form-label">Role</label>
                <select className="form-select">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-6">
                <label className="form-label">
                  <FormattedMessage id="menu.manage-user.image"></FormattedMessage>
                </label>
                <input type="file" className="form-control" id="inputCity" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary mt-2">
                  <FormattedMessage id="menu.manage-user.createUser"></FormattedMessage>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRd);
