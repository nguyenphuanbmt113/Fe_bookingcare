import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { RotatingTriangles } from "react-loader-spinner";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {
  fetchGenderStart,
  fetchPositionStart,
  fetchRoleStart,
  fetchUser,
} from "../../../store/actions/adminActions";
import "./UserRd.scss";
import TableUser from "./TableUser";
// import TablemanageUser from "./TableUser";
class UserRd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgName: "",
      previewImg: "",
      isOpen: false,
      email: "",
      password: "",
      address: "",
      gender: "",
      role: "",
      position: "",
      phonenumber: "",
      firstName: "",
      lastName: "",
      image: "",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getRoleStart();
    this.props.getPositionStart();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderData !== this.props.genderData) {
      const arrGender = this.props.genderData;
      console.log("absf");
      this.setState({
        genderData: arrGender,
        gender: arrGender && arrGender.length > 0 ? arrGender[0].key : "",
      });
    }
    if (prevProps.roleData !== this.props.roleData) {
      const arrRole = this.props.roleData;
      this.setState({
        roleData: arrRole,
        role: arrRole && arrRole.length > 0 ? arrRole[0].key : "",
      });
    }
    if (prevProps.positionData !== this.props.positionData) {
      const arrPosition = this.props.positionData;
      this.setState({
        positionData: this.props.positionData,
        position:
          arrPosition && arrPosition.length > 0 ? arrPosition[0].key : "",
      });
    }
  }
  handleChangeImg = (e) => {
    let file = e.target.files[0];
    console.log("file", file);
    this.setState({
      imgName: file.name,
      image: file,
    });
    if (file) {
      const imgPrev = URL.createObjectURL(file);
      console.log("imgPrev", imgPrev);
      this.setState({
        previewImg: imgPrev,
      });
    }
  };
  showImgPreview = () => {
    this.setState({ isOpen: true });
  };
  //check validation
  checkValidation = () => {
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phonenumber",
      "role",
      "position",
      "gender",
    ];
    let isValid = true;
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter", +arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  //input chnage
  handleOnchnageInput = (e, type) => {
    if (type === "EMAIL") {
      this.setState({
        email: e.target.value,
      });
    }
    if (type === "PASSWORD") {
      this.setState({
        password: e.target.value,
      });
    }
    if (type === "FIRSTNAME") {
      this.setState({
        firstName: e.target.value,
      });
    }
    if (type === "LASTNAME") {
      this.setState({
        lastName: e.target.value,
      });
    }
    if (type === "PHONENUMBER") {
      this.setState({
        phonenumber: e.target.value,
      });
    }
    if (type === "ADDRESS") {
      this.setState({
        address: e.target.value,
      });
    }
    if (type === "ROLE") {
      this.setState({
        role: e.target.value,
      });
    }
    if (type === "POSITION") {
      this.setState({
        position: e.target.value,
      });
    }
    if (type === "GENDER") {
      this.setState({
        gender: e.target.value,
      });
    }
    if (type === "IMAGE") {
      this.setState({
        image: e.target.files,
      });
    }
  };
  //submit BTN
  handleSaveUser = () => {
    this.props.getUser({
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      gender: this.state.gender,
      roleId: this.state.role,
      positionId: this.state.position,
      phonenumber: this.state.phonenumber,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
    });
  };
  render() {
    let genderData = this.props.genderData;
    let roleData = this.props.roleData;
    let positionData = this.props.positionData;
    let isLoadingGender = this.props.isLoadingGender;
    // console.log(">check: ", this.state.previewImg);
    return (
      <>
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
              <div className="row g-3">
                <div className="col-3">
                  <label className="form-label">
                    {" "}
                    <FormattedMessage id="menu.manage-user.email"></FormattedMessage>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={(e) => this.handleOnchnageInput(e, "EMAIL")}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">
                    {" "}
                    <FormattedMessage id="menu.manage-user.password"></FormattedMessage>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={(e) => this.handleOnchnageInput(e, "PASSWORD")}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">
                    {" "}
                    <FormattedMessage id="menu.manage-user.firstName"></FormattedMessage>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={(e) => this.handleOnchnageInput(e, "FIRSTNAME")}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">
                    {" "}
                    <FormattedMessage id="menu.manage-user.lastName"></FormattedMessage>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={(e) => this.handleOnchnageInput(e, "LASTNAME")}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">
                    {" "}
                    <FormattedMessage id="menu.manage-user.phone"></FormattedMessage>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.phonenumber}
                    onChange={(e) => this.handleOnchnageInput(e, "PHONENUMBER")}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">
                    {" "}
                    <FormattedMessage id="menu.manage-user.address"></FormattedMessage>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.address}
                    onChange={(e) => this.handleOnchnageInput(e, "ADDRESS")}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">
                    <FormattedMessage id="menu.manage-user.gender"></FormattedMessage>
                  </label>
                  <select
                    className="form-select"
                    value={this.state.gender}
                    onChange={(e) => this.handleOnchnageInput(e, "GENDER")}>
                    {genderData &&
                      genderData.length > 0 &&
                      genderData.map((item) => {
                        return (
                          <option key={item.id} value={item.key}>
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
                    <FormattedMessage id="menu.manage-user.position"></FormattedMessage>
                  </label>
                  <select
                    className="form-select"
                    value={this.state.position}
                    onChange={(e) => this.handleOnchnageInput(e, "POSITION")}>
                    {positionData &&
                      positionData.length > 0 &&
                      positionData.map((item) => {
                        return (
                          <option key={item.id} value={item.key}>
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
                  <select
                    className="form-select"
                    value={this.state.role}
                    onChange={(e) => this.handleOnchnageInput(e, "ROLE")}>
                    {roleData &&
                      roleData.length > 0 &&
                      roleData.map((item) => {
                        return (
                          <option key={item.id} value={item.key}>
                            {this.props.lang === "vi"
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">
                    <FormattedMessage id="menu.manage-user.image"></FormattedMessage>
                  </label>
                  <div className="imgpreview">
                    <label className="input-label" htmlFor="taianh">
                      <span className="mr-2">Tải ảnh</span>
                      <i className="fas fa-upload ml-2"></i>
                    </label>
                    <input
                      type="file"
                      className="form-control opacity-0"
                      id="taianh"
                      onChange={(e) => this.handleChangeImg(e, "IMAGE")}
                      hidden
                    />
                    {this.state.previewImg && this.state.imgName && (
                      <>
                        <div
                          className="border img-preview"
                          onClick={() => this.showImgPreview()}>
                          <img src={this.state.previewImg} alt="" />
                        </div>
                        <div className="img-name">{this.state?.imgName}</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-12" onClick={() => this.handleSaveUser()}>
                  <div className="btn btn-primary mt-2">
                    <FormattedMessage id="menu.manage-user.createUser"></FormattedMessage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.previewImg && this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImg}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
        <TableUser></TableUser>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
    genderData: state.admin.genderData,
    roleData: state.admin.roleData,
    positionData: state.admin.positionData,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(fetchGenderStart()),
    getRoleStart: () => dispatch(fetchRoleStart()),
    getPositionStart: () => dispatch(fetchPositionStart()),
    getUser: (data) => dispatch(fetchUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRd);
