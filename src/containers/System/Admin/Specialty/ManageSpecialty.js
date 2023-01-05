import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageSpecialty.scss";
import ModalSpecialty from "./ModalSpecialty";
class ManageSpecialty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      
    };
  }
  //toggle modal
  toggle = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  };
  //handleOpenModal
  handleOpenModal = () => {
    this.setState({
      isShowModal: true,
    });
  };
  render() {
    return (
      <>
        <div className="manage-specialty-container">
          <div className="ms-title">Quản Lý Chuyên Khoa</div>
          <div
            className="btn-addnew-specialty"
            onClick={() => this.handleOpenModal()}>
            Create Specialty
          </div>
          <div className="all-specialty"></div>
          <ModalSpecialty
            isShow={this.state.isShowModal}
            toggle={this.toggle}></ModalSpecialty>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
