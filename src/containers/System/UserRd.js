import React, { Component } from "react";
import { connect } from "react-redux";
class UserRd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="userrd-container">
        <div className="title">Quản Lý Người Dùng</div>
        <div>
          <button>Thêm mới người </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRd);
