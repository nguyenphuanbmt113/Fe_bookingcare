import React, { Component } from "react";
import { connect } from "react-redux";
import { getClinicByQuery } from "../../../../services/userService";
import Header from "../../../HomePage/Header";
import "./DetailClinic.scss";
import _ from "lodash";
import ProfileDoctorV2 from "../../../Parient/Specialty/ProfileDoctorV2";
import DoctorSchedule from "../../../Parient/Doctor/DoctorSchedule";
class DetailClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailClinic: {},
      arrDoctorId: [],
    };
  }
  //component did mount
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let { id } = this.props.match.params;
      let res = await getClinicByQuery(id);
      if (res.data.EC === 0) {
        let data = res.data.DT;
        let arrDoctorId = [];
        if (data && !_.isEmpty(data)) {
          let arr = data.ClinicData;
          if (arr && arr.length > 0) {
            arr.forEach((item, index) => {
              arrDoctorId.push(item.doctorId);
            });
          }
        }
        this.setState({
          detailClinic: res.data.DT,
          arrDoctorId: arrDoctorId,
        });
        console.log("arrDoctorId", arrDoctorId);
      }
    }
  }
  render() {
    const { detailClinic, arrDoctorId } = this.state;
    return (
      <div className=" detail-clinic">
        <div>
          <Header></Header>
        </div>
        <div>
          {detailClinic && !_.isEmpty(detailClinic) && (
            <div
              dangerouslySetInnerHTML={{
                __html: detailClinic?.descriptionHTML,
              }}></div>
          )}
        </div>
        <div className="detail-clinic-wrap">
          {arrDoctorId &&
            arrDoctorId.length > 0 &&
            arrDoctorId.map((item, index) => {
              return (
                <div className="detail-clinic-container">
                  <div className="content-left">
                    <ProfileDoctorV2 doctorId={item}></ProfileDoctorV2>
                  </div>
                  <div className="content-right">
                    <DoctorSchedule doctorId={item}></DoctorSchedule>
                  </div>
                </div>
              );
            })}

          {arrDoctorId && arrDoctorId.length === 0 && <div>Khong co</div>}
        </div>
        <div className="h-10"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
