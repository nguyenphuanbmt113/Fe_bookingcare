import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Specialization from "./Section/Specialization";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Specialization></Specialization>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
