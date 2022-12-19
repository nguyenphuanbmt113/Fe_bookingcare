import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "../HomePage.scss";
import Slider from "react-slick";
let settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
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
class HandBook extends Component {
  render() {
    return (
      <>
        <div className="section-container section-white">
          <div className="section-content">
            <div className="section-top">
              <span className="title1">
                {" "}
                <FormattedMessage id="banner.Handbook"></FormattedMessage>
              </span>
              <span className="btn-section">
                {" "}
                <FormattedMessage id="banner.seemore"></FormattedMessage>
              </span>
            </div>
            <div className="slick-container">
              <Slider {...settings}>
                <div className="handbook-content">
                  <div className="handbook-image">
                    <img
                      src="https://images.unsplash.com/photo-1671394033488-a3ce85f1076a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="handlebook-title">
                    8 địa chỉ khám Cơ Xương Khớp uy tín tại TPHCM (Phần 2)
                  </div>
                </div>
                <div className="handbook-content">
                  <div className="handbook-image">
                    <img
                      src="https://images.unsplash.com/photo-1671394033488-a3ce85f1076a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="handlebook-title">
                    8 địa chỉ khám Cơ Xương Khớp uy tín tại TPHCM (Phần 2)
                  </div>
                </div>
                <div className="handbook-content">
                  <div className="handbook-image">
                    <img
                      src="https://images.unsplash.com/photo-1671394033488-a3ce85f1076a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="handlebook-title">
                    8 địa chỉ khám Cơ Xương Khớp uy tín tại TPHCM (Phần 2)
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
