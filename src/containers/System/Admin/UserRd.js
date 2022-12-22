import React, { Component } from "react";
import "react-image-lightbox/style.css";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { fetchCreateUser } from "../../../store/actions/adminActions";
import ModalUserUpdateV2 from "../ModalUserUpdateV2";
import ModalUserV2 from "../ModalUserV2";
// import ModalUserV2 from "../ModalUserV2";
import TableUser from "./TableUser";
import "./UserRd.scss";
class UserRd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isShowUpdate: false,
      userUpdate: {},
    };
  }
  toggle = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  toggleUpdateModal = () => {
    this.setState({
      isShowUpdate: !this.state.isShowUpdate,
    });
  };
  getUpdateModal = (item) => {
    this.setState({
      isShowUpdate: true,
      userUpdate: item,
    });
  };

  render() {
    console.log("userUpdate:", this.state.userUpdate);
    return (
      <>
        <div className="container-header-manage">
          <div className="title-header mb-1">
            <FormattedMessage id="menu.manage-user.manage-user"></FormattedMessage>
          </div>
          <button onClick={() => this.toggle()} className="btn-add">
            <FormattedMessage id="menu.manage-user.Create-User"></FormattedMessage>
          </button>
        </div>
        <TableUser
          toggle={this.toggleUpdateModal}
          getUpdateModal={this.getUpdateModal}></TableUser>
        <ModalUserV2
          isShow={this.state.isShow}
          toggle={this.toggle}></ModalUserV2>
        {this.state.isShowUpdate === true && (
          <ModalUserUpdateV2
            isShow={this.state.isShowUpdate}
            toggle={this.toggleUpdateModal}
            userUpdate={this.state.userUpdate}></ModalUserUpdateV2>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => dispatch(fetchCreateUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRd);
