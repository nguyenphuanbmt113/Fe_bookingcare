import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  toggle = () => {
    this.props.toggle();
  };
  closeBtn = () => {};
  render() {
    return (
      <Modal
        // isOpen={true}
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        size={"lg"}
        centered>
        <ModalHeader toggle={() => this.toggle()} close={() => this.closeBtn()}>
          Create User
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <form className="row">
              <div className="form-group col-6 mb-3">
                <label className="mb-1">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group col-6 mb-3">
                <label className="mb-1">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group col-6 mb-3">
                <label className="mb-1">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-6 mb-3">
                <label className="mb-1">Last Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-6">
                <label className="mb-1">Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-6">
                <label className="mb-1">Phone Number</label>
                <input type="text" className="form-control" />
              </div>
            </form>
            <div className="mt-4">
              <Button
                color="primary"
                onClick={() => this.toggle()}
                className="px-3">
                Save
              </Button>
              <Button
                color="secondary"
                onClick={() => this.toggle()}
                className="px-3 mx-3">
                Cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
