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
} from "../../../store/actions/adminActions";
import "./UserRd.scss";
class UserRd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // genderData: [],
      imgName: "",
      previewImg: "",
      isOpen: false,
      // index: 0,
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getRoleStart();
    this.props.getPositionStart();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderData !== this.props.genderData) {
      this.setState({
        genderData: this.props.genderData,
      });
    }
    if (prevProps.roleData !== this.props.roleData) {
      this.setState({
        roleData: this.props.roleData,
      });
    }
    if (prevProps.positionData !== this.props.positionData) {
      this.setState({
        positionData: this.props.positionData,
      });
    }
  }
  handleChangeImg = (e) => {
    let file = e.target.files[0];
    console.log("file", file);
    this.setState({
      imgName: file.name,
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
  render() {
    let genderData = this.props.genderData;
    let roleData = this.props.roleData;
    let positionData = this.props.positionData;
    let isLoadingGender = this.props.isLoadingGender;
    console.log(">check: ", this.state.previewImg);
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
                    <FormattedMessage id="menu.manage-user.position"></FormattedMessage>
                  </label>
                  <select className="form-select">
                    {positionData &&
                      positionData.length > 0 &&
                      positionData.map((item) => {
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
                    {roleData &&
                      roleData.length > 0 &&
                      roleData.map((item) => {
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
                <div className="col-6">
                  <label className="form-label">
                    <FormattedMessage id="menu.manage-user.image"></FormattedMessage>
                  </label>
                  <div className="imgpreview">
                    <label className="input-label" htmlFor="taianh">
                      <span className="mr-2">Tải ảnh</span>
                      <i class="fas fa-upload ml-2"></i>
                    </label>
                    <input
                      type="file"
                      className="form-control opacity-0"
                      id="taianh"
                      onChange={(e) => this.handleChangeImg(e)}
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
                <div className="col-12">
                  <button type="submit" className="btn btn-primary mt-2">
                    <FormattedMessage id="menu.manage-user.createUser"></FormattedMessage>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.state.previewImg && this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImg}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRd);
