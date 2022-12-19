import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MedicalFacility from "./Section/MedicalFacility";
import Specialization from "./Section/Specialization";
import "./HomePage.scss";
import DoctorFacility from "./Section/DoctorFacility";
import HandBook from "./Section/HandBook";
import AboutSection from "./Section/About";
class HomePage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Specialization></Specialization>
        <MedicalFacility></MedicalFacility>
        <DoctorFacility></DoctorFacility>
        <HandBook></HandBook>
        <AboutSection></AboutSection>
        {/* <div className="h"></div> */}
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
