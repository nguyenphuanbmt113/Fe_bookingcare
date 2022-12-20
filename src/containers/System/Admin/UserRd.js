import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { RotatingTriangles } from "react-loader-spinner";
import { fetchGenderStart } from "../../../store/actions/adminActions";
import "./UserRd.scss";
class UserRd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // genderData: [],
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
  }

  render() {
    let genderData = this.props.genderData;
    let isLoadingGender = this.props.isLoadingGender;
    console.log("isLoadingGender", isLoadingGender);
    return (
      <div className="userrd-container">
        {isLoadingGender === true && (
          <div>
            <div className="loading">
              <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-triangels-wrapper"
                colors={["#fff", "#fff", "#fff"]}
              />
            </div>
            <div className="overlay"></div>
          </div>
        )}
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
                        <option key={item.id}>
                          {this.props.lang === "vi"
                            ? item.valueVi
                            : item.valueEn}
                        </option>
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
    genderData: state.admin.genderData,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(fetchGenderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRd);
