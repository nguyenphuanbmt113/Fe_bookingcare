import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./MedicalFacility.scss";
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
        slidesToShow: 3,
        slidesToScroll: 3,
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
class MedicalFacility extends Component {
  render() {
    return (
      <>
        <div className="section-container section-white">
          <div className="section-content">
            <div className="section-top">
              <span className="title1">
                {" "}
                <FormattedMessage id="banner.Medical-Facility"></FormattedMessage>
              </span>
              <span className="btn-section">
                {" "}
                <FormattedMessage id="banner.seemore"></FormattedMessage>
              </span>
            </div>
            <div className="slick-container">
              <Slider {...settings}>
                <div className="img-container">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/1271.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="img-container">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/1272.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="img-container">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/2330.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="img-container">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/1270.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="img-container">
                  <img
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/4120.png"
                    alt=""
                    className=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
