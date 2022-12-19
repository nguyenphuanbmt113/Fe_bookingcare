import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";
let settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
class DoctorFacility extends Component {
  render() {
    return (
      <div className="section-container section-doctor">
        <div className="section-content">
          <div className="section-top">
            <span className="title1">
              {" "}
              <FormattedMessage id="banner.Doctor-Facility"></FormattedMessage>
            </span>
            <span className="btn-section">
              {" "}
              <FormattedMessage id="banner.seemore"></FormattedMessage>
            </span>
          </div>
          <div className="slick-container">
            <Slider {...settings}>
              <div className="doctor-container">
                <div className="image-doctor">
                  <img
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt=""
                  />
                </div>
                <div className="title-doctor">
                  Bác sĩ Chuyên khoa II Trần Minh Khuyên
                </div>
                <div className="title-doctor2">
                  khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
                </div>
              </div>
              <div className="doctor-container">
                <div className="image-doctor">
                  <img
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt=""
                  />
                </div>
                <div className="title-doctor">
                  Bác sĩ Chuyên khoa II Trần Minh Khuyên
                </div>
                <div className="title-doctor2">
                  khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
                </div>
              </div>
              <div className="doctor-container">
                <div className="image-doctor">
                  <img
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt=""
                  />
                </div>
                <div className="title-doctor">Bác sĩ Chuyên khoa II</div>
                <div className="title-doctor2">
                  khoa lâm sàng, Bệnh tâm thần Thành
                </div>
              </div>
              <div className="doctor-container">
                <div className="image-doctor">
                  <img
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt=""
                  />
                </div>
                <div className="title-doctor">
                  Bác sĩ Chuyên khoa II Trần Minh Khuyên
                </div>
                <div className="title-doctor2">
                  khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
                </div>
              </div>
              <div className="doctor-container">
                <div className="image-doctor">
                  <img
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt=""
                  />
                </div>
                <div className="title-doctor">
                  Bác sĩ Chuyên khoa II Trần Minh Khuyên
                </div>
                <div className="title-doctor2">
                  khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
                </div>
              </div>
              <div className="doctor-container">
                <div className="image-doctor">
                  <img
                    src="https://images.unsplash.com/photo-1670766167104-f8c0d4561708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt=""
                  />
                </div>
                <div className="title-doctor">
                  Bác sĩ Chuyên khoa II Trần Minh Khuyên
                </div>
                <div className="title-doctor2">
                  khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
                </div>
              </div>
            </Slider>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorFacility);
