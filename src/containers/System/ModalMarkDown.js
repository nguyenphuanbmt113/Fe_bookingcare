import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
// import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import MarkDown from "./MarkDown";
import "./ModalMarkdown.scss";
import {
  fetchAllDoctor,
  fetchInfoDoctor,
} from "../../store/actions/adminActions";
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
class ModalMarkDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: "",
      doctorId: "",
      contentHTML: "",
      contentMarkdown: "",
      description: "",
      allDoctors: [],
    };
  }
  //handleSelect
  handleSelect = (allDoctors) => {
    const options = [];
    allDoctors.forEach((ele) => {
      let labelVi = `${ele.firstName} ${ele.lastName}`;
      let labelEn = `${ele.lastName} ${ele.firstName}`;
      options.push({
        value: ele.id,
        label: this.props.lang === "vi" ? labelVi : labelEn,
      });
    });
    return options;
  };
  //life circle
  componentDidMount() {
    this.props.getAllDoctor();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allDoctor !== this.props.allDoctor) {
      let dataSelected = this.handleSelect(this.props.allDoctor);

      this.setState({
        allDoctors: dataSelected,
      });
    }
    if (prevProps.lang !== this.props.lang) {
      let dataSelected = this.handleSelect(this.props.allDoctor);
      this.setState({
        allDoctors: dataSelected,
      });
    }
    if (prevProps.isCorrectSaveInfo !== this.props.isCorrectSaveInfo) {
      this.toggle();
    }
  }
  //select options
  handleChange = (selectedDoctor) => {
    this.setState({
      selectedDoctor,
    });
  };
  toggle = () => {
    this.props.toggle();
  };
  handleChangetextarea = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  //handleMarkdown
  setContent = (contentHTML, contentMarkdown) => {
    this.setState({
      contentHTML: contentHTML,
      contentMarkdown: contentMarkdown,
    });
  };
  //handleSubmit
  handleSubmit = () => {
    this.props.saveInfoDoctor({
      doctorId: this.state.selectedDoctor.value,
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
    });
  };
  render() {
    console.log("allDoctors", this.state.allDoctors);
    console.log("selectedDoctor", this.state.selectedDoctor);
    return (
      <Modal
        dialogClassName="modal"
        isOpen={this.props.isShow}
        toggle={() => this.toggle()}
        size={"xl"}
        centered>
        <ModalHeader toggle={() => this.toggle()}>MarkDown Editor</ModalHeader>
        <ModalBody>
          <div className="top-container flex flex-column">
            <div className="mb-2">Chọn Bác Sĩ</div>
            <div className="col-6">
              <Select
                value={this.state.selectedDoctor}
                onChange={this.handleChange}
                options={this.state.allDoctors}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-2">Mô Tả Thông Tin Bác Sĩ</div>
            <div className="col-6 mb-3">
              <textarea
                rows="4"
                cols="50"
                value={this.state.description}
                onChange={(e) => this.handleChangetextarea(e)}
                className="text-editor"
                placeholder="Description"></textarea>
            </div>
          </div>
          <MarkDown setContent={this.setContent}></MarkDown>
          <div className="mt-4">
            <Button
              color="primary"
              className="px-3"
              onClick={() => this.handleSubmit()}>
              Lưu Thông Tin
            </Button>
            <Button
              color="secondary"
              onClick={() => this.toggle()}
              className="px-3 mx-3">
              Cancel
            </Button>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allDoctor: state.admin.allDoctor,
    isCorrectSaveInfo: state.admin.isCorrectSaveInfo,
    lang: state.app.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllDoctor: () => dispatch(fetchAllDoctor()),
    saveInfoDoctor: (data) => dispatch(fetchInfoDoctor(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalMarkDown);
