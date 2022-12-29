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
  fetchPayment,
  fetchPrice,
  fetchProvice,
} from "../../store/actions/adminActions";
import { geteDetailInfoDoctor } from "../../services/userService";
class ModalMarkDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //markdown table
      oldData: false,
      selectedDoctor: "",
      doctorId: "",
      contentHTML: "",
      contentMarkdown: "",
      description: "",

      //save for doctorTable
      allDoctors: [],
      listPrice: [],
      listPayment: [],
      listProvice: [],

      selectPrice: "",
      selectPayment: "",
      selectProvice: "",
      nameClinic: "",
      nameAddress: "",
      note: "",
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
  //handleSelect Price
  handleSelectInfo = (inputData) => {
    const options = [];
    inputData.forEach((ele) => {
      options.push({
        value: ele.keyMap,
        label: this.props.lang === "vi" ? ele.valueVi : ele.valueEn,
      });
    });
    return options;
  };
  //handleSelect province
  //handleSelect payment
  //life circle
  componentDidMount() {
    this.props.getAllDoctor();
    this.props.getPriceDoctor();
    this.props.getProviceDoctor();
    this.props.getPaymentDoctor();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allDoctor !== this.props.allDoctor) {
      let dataSelected = this.handleSelect(this.props.allDoctor);

      this.setState({
        allDoctors: dataSelected,
      });
    }
    if (prevProps.arrPrice !== this.props.arrPrice) {
      let dataSelected = this.handleSelectInfo(this.props.arrPrice);
      this.setState({
        listPrice: dataSelected,
      });
    }
    if (prevProps.arrPayment !== this.props.arrPayment) {
      let dataSelected = this.handleSelectInfo(this.props.arrPayment);
      this.setState({
        listPayment: dataSelected,
      });
    }
    if (prevProps.arrProvice !== this.props.arrProvice) {
      let dataSelected = this.handleSelectInfo(this.props.arrProvice);
      this.setState({
        listProvice: dataSelected,
      });
    }
    if (prevProps.lang !== this.props.lang) {
      let dataSelected = this.handleSelect(this.props.allDoctor);
      this.setState({
        allDoctors: dataSelected,
      });
    }
    // if (prevProps.isCorrectSaveInfo !== this.props.isCorrectSaveInfo) {
    //   this.toggle();
    // }
  }
  //select options
  handleChange = async (selectedDoctor) => {
    console.log("selectedDoctor", selectedDoctor);
    this.setState({
      selectedDoctor,
    });
    const res = await geteDetailInfoDoctor(selectedDoctor.value);
    console.log("res", res);
    if (res?.data?.EC === 0 && res.data?.DT && res.data?.DT?.Markdown) {
      let markdown = res.data?.DT?.Markdown;
      console.log("markdown", markdown);
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown?.description,
        oldData: true,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        oldData: false,
      });
    }
  };
  //select price
  handleChangePrice = (selectedChose) => {
    this.setState({
      selectPrice: selectedChose,
    });
  };
  //select provice
  handleChangeProvince = (selectedChose) => {
    this.setState({
      selectProvice: selectedChose,
    });
  };
  //select payment
  handleChangePayment = (selectedChose) => {
    this.setState({
      selectPayment: selectedChose,
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

      selectPrice: this.state.selectPrice.value,
      selectPayment: this.state.selectPayment.value,
      selectProvice: this.state.selectProvice.value,
      nameClinic: this.state.nameClinic,
      nameAddress: this.state.nameAddress,
      note: this.state.note,
    });
  };
  //handle Onchange input
  handleChangeInput = (e, id) => {
    console.log("name", id);
    let stateCopy = { ...this.state };
    console.log("stateCopy", stateCopy);
    stateCopy[id] = e.target.value;
    this.setState({
      ...stateCopy,
    });
  };
  render() {
    const { oldData } = this.state;
    const { arrPrice, arrProvice, arrPayment } = this.props;
    console.log("arrPayment", arrPayment);
    console.log("arrProvice", arrProvice);
    console.log("arrPrice", arrPrice);
    return (
      <Modal
        dialogClassName="modal"
        isOpen={this.props.isShow}
        // isOpen={true}
        toggle={() => this.toggle()}
        size={"xl"}
        centered>
        <ModalHeader toggle={() => this.toggle()}>
          Thêm Thông tin Cho Bác Sĩ
        </ModalHeader>
        <ModalBody>
          <div className="top-container flex flex-column">
            <div className="mb-2">Chọn Bác Sĩ</div>
            <div className="col-12">
              <Select
                placeholder={"Choose Doctor"}
                value={this.state.selectedDoctor}
                onChange={this.handleChange}
                options={this.state.allDoctors}
              />
            </div>
          </div>
          <div className="container-info row">
            <div className="form-group col-4 mb-3">
              <label className="mb-1">Chọn Giá</label>
              <Select
                placeholder={"Choose Price"}
                value={this.state.selectPrice}
                onChange={this.handleChangePrice}
                options={this.state.listPrice}
              />
            </div>
            <div className="form-group col-4 mb-3">
              <label className="mb-1">Phương Thức Thanh Toán</label>
              <Select
                placeholder={"Choose Method Payment"}
                value={this.state.selectPayment}
                onChange={this.handleChangePayment}
                options={this.state.listPayment}
              />
            </div>
            <div className="form-group col-4 mb-3">
              <label className="mb-1">Chọn Tỉnh Thành</label>
              <Select
                placeholder={"Choose Province"}
                value={this.state.selectProvice}
                onChange={this.handleChangeProvince}
                options={this.state.listProvice}
              />
            </div>
            <div className="form-group col-4 mb-3">
              <label className="mb-1">Tên Khòng Khám</label>
              <input
                type="text"
                className="form-control"
                value={this.state.nameClinic}
                onChange={(e) => this.handleChangeInput(e, "nameClinic")}
              />
            </div>
            <div className="form-group col-4 mb-3">
              <label className="mb-1">Địa chỉ phòng khám</label>
              <input
                type="email"
                className="form-control"
                value={this.state.nameAddress}
                onChange={(e) => this.handleChangeInput(e, "nameAddress")}
              />
            </div>
            <div className="form-group col-4 mb-3">
              <label className="mb-1">Ghi Chú</label>
              <input
                type="email"
                className="form-control"
                value={this.state.note}
                onChange={(e) => this.handleChangeInput(e, "note")}
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-2">Mô Tả Thông Tin Bác Sĩ</div>
            <div className="col-12 mb-3">
              <textarea
                rows="4"
                cols="50"
                value={this.state.description || ""}
                onChange={(e) => this.handleChangetextarea(e)}
                className="text-editor"
                placeholder="Description"></textarea>
            </div>
          </div>
          <MarkDown
            setContent={this.setContent}
            contentMarkdown={this.state.contentMarkdown}></MarkDown>
          <div className="mt-4">
            <Button
              color="primary"
              className="px-3"
              onClick={() => this.handleSubmit()}>
              {oldData === true ? "Sữa Thông Tin" : "Lưu Thông Tin"}
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
    //info doctor
    allDoctor: state.admin.allDoctor,
    arrPrice: state.admin.arrPrice,
    arrProvice: state.admin.arrProvice,
    arrPayment: state.admin.arrPayment,

    isCorrectSaveInfo: state.admin.isCorrectSaveInfo,
    lang: state.app.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllDoctor: () => dispatch(fetchAllDoctor()),
    saveInfoDoctor: (data) => dispatch(fetchInfoDoctor(data)),
    //disptch info doctor
    getPriceDoctor: () => dispatch(fetchPrice()),
    getProviceDoctor: () => dispatch(fetchProvice()),
    getPaymentDoctor: () => dispatch(fetchPayment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalMarkDown);