import React, { Component, Fragment } from 'react';
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      intervalId: null, 
      intervalDuration: 10000 
    };
  }

  componentDidMount() {
    this.startAutoplay();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  handleNext = () => {
    this.setState(prevState => ({
      index: (prevState.index + 1) % 3 
    }));
  };
  handlePrevious = () => {
    this.setState(prevState => ({
      index: (prevState.index - 1 + 3) % 3 
    }));
  };
  handleStop = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null, index: 0 });
      };

  // Event handler for play button
  handlePlay = () => {
    this.setState(prevState => ({
      index: (prevState.index + 1) % 3
    }), () => {
      this.startAutoplay();
    });  };

  // Start autoplay
  startAutoplay = () => {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        index: (prevState.index + 1) % 3 
      }));
    }, this.state.intervalDuration);
    this.setState({ intervalId });
  };

  render() {
    const { index } = this.state; 

    return (
      <>
      <div id="carouselExampleInterval" className="carousel slide w-50 mx-auto" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
            <img src="/images/1.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className={`carousel-item ${index === 1 ? 'active' : ''}`} data-bs-interval="10000">
            <img src="/images/2.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className={`carousel-item ${index === 2 ? 'active' : ''}`} data-bs-interval="10000">
            <img src="/images/3.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" onClick={this.handlePrevious}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" onClick={this.handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
     
        <button className="carousel-control-play" type="button" onClick={this.handlePlay}>
          Slider
        </button>
        <button className="carousel-control-previous" type="button" onClick={this.handlePrevious}>
          Previous
        </button>
        <button className="carousel-control-nextt" type="button" onClick={this.handleNext}>
          Next
        </button>
        <button className="carousel-control-stop" type="button" onClick={this.handleStop}>
          Stop
        </button>

      </div>
    </>
    );
  }
}