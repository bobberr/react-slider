import React from "react";
import SingleSlide from "./SingleSlide";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { getSlides } from "../Redux/action-creators";

class Slider extends React.Component {
  state = {
    slideIndex: 0,
    slides: [],
    timeout: 10000,
    offset: 0
  };
  componentDidMount = () => {
    this.props.getSlides();
    this.intervalId = setInterval(this.timer, this.state.timeout);
  };
  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };
  timer = () => {
    const state = this.state;
    this.setState(() => {
      if (state.slideIndex === this.props.slidesToRender.length - 1) {
        return {
          offset: 0,
          slideIndex: 0
        };
      } else {
        this.setState(prevState => ({
          offset: prevState.offset - 640,
          slideIndex: prevState.slideIndex + 1
        }));
      }
    });
  };
  previousSlide = () => {
    const state = this.state;
    if (state.slideIndex === 0) {
      this.setState({
        offset: -640 * (this.props.slidesToRender.length - 1),
        slideIndex: this.props.slidesToRender.length - 1
      });
    } else {
      this.setState(prevState => ({
        offset: prevState.offset + 640,
        slideIndex: prevState.slideIndex - 1
      }));
    }
  };
  nextSlide = () => {
    const state = this.state;
    if (state.slideIndex === this.props.slidesToRender.length - 1) {
      this.setState({ offset: 0, slideIndex: 0 });
    } else {
      this.setState(prevState => ({
        offset: prevState.offset - 640,
        slideIndex: prevState.slideIndex + 1
      }));
    }
  };
  mouseEnterHandler = () => {
    clearInterval(this.intervalId);
  };
  mouseLeaveHandler = () => {
    this.intervalId = setInterval(this.timer, this.state.timeout);
  };
  render() {
    // console.log(this.props.slidesToRender);

    if (this.props.slidesToRender.length > 0) {
      const state = this.state;
      const slideIndex = state.slideIndex;
      const slides = this.props.slidesToRender;
      const prevSlide =
        slideIndex === 0 ? slides[slides.length - 1] : slides[slideIndex - 1];
      const nextSlide =
        slideIndex === slides.length - 1 ? slides[0] : slides[slideIndex + 1];
      return (
        <div className="slider">
          <button
            className="slider__prev-button slider__control-button"
            onClick={this.previousSlide}
          />
          <div
            onMouseEnter={this.mouseEnterHandler}
            onMouseLeave={this.mouseLeaveHandler}
            className="slider__image-block"
          >
            <div
              className="slider__slide-wrapper"
              style={{
                transform: `translateX(${this.state.offset}px)`,
                transition: "transform .3s ease-in"
              }}
            >
              {this.props.slidesToRender.map((slide, index) => {
                return (
                  <SingleSlide
                    key={uniqid()}
                    text={slide.text}
                    heroImg={slide.hero}
                    detailImg={slide.image}
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                  />
                );
              })}
            </div>
          </div>

          <button
            className="slider__next-button slider__control-button"
            onClick={this.nextSlide}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  slidesToRender: state.slides.data
});

export default connect(
  mapStateToProps,
  { getSlides }
)(Slider);
