import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import MarkDown from "./MarkDown";
class ModalMarkDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggle = () => {
    this.props.toggle();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isShow}
        toggle={() => this.toggle()}
        size={"xl"}
        centered>
        <ModalHeader toggle={() => this.toggle()} close={() => this.closeBtn()}>
          MarkDown Editor
        </ModalHeader>
        <ModalBody>
          <MarkDown></MarkDown>
          <div className="mt-4">
            <Button color="primary" className="px-3">
              Submit
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
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalMarkDown);
