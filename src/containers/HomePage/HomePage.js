import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MedicalFacility from "./Section/MedicalFacility";
import Specialization from "./Section/Specialization";
import "./HomePage.scss"
class HomePage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Specialization></Specialization>
        <MedicalFacility></MedicalFacility>
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
