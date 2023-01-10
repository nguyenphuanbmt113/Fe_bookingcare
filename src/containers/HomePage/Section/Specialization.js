import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { ColorRing } from "react-loader-spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getSpecialty } from "../../../services/userService";
import { fetchLoading } from "../../../store/actions/adminActions";
import "../HomePage.scss";
let settings = {
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
class Specialization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSpecialty: [],
      isLoadingSpecialty: false,
    };
  }
  async componentDidMount() {
    this.setState({
      isLoadingSpecialty: true,
    });
    const res = await getSpecialty();
    if (res.data.EC === 0) {
      this.setState({
        dataSpecialty: res.data.DT || [],
      });
      this.setState({
        isLoadingSpecialty: false,
      });
    }
  }
  gotoDetail = (id) => {
    if (this.props.history) {
      this.props.history.push(`/detail-specialty/${id}`);
    }
  };
  handleClickSpecialty = (id) => {
    this.gotoDetail(id);
  };
  render() {
    let { dataSpecialty } = this.state;
    return (
      <div className="section-container">
        <div className="section-content">
          <div className="section-top">
            <span className="title1">
              {" "}
              <FormattedMessage id="banner.Popular-Specialization"></FormattedMessage>
            </span>
            <span className="btn-section">
              {" "}
              <FormattedMessage id="banner.seemore"></FormattedMessage>
            </span>
          </div>
          <div className="slick-container">
            <Slider {...settings}>
              {dataSpecialty &&
                dataSpecialty.length > 0 &&
                dataSpecialty.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => this.handleClickSpecialty(item.id)}>
                      <div className="img-container">
                        <img src={item.image} alt="" className="" />
                      </div>
                      <div className="mt-2 name-specialty">{item.name}</div>
                    </div>
                  );
                })}
            </Slider>
            {this.state.isLoadingSpecialty === true && (
              <div className="loading-container">
                <div className="loading">
                  <ColorRing
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="rotating-triangels-loading"
                    wrapperStyle={{}}
                    wrapperClass="rotating-triangels-wrapper"
                    colors={[
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                    ]}
                  />
                </div>
                <div className="overlay"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoadingRedux: state.admin.isLoadingRedux,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLoadingRedux: (flag) => dispatch(fetchLoading(flag)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Specialization)
);
