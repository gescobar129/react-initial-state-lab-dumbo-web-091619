// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {

  state = {
    currentSlideIndex: 0
  }

  render() {
    return(
      <div>
        <h2>I am on slide { this.state.currentSlideIndex }</h2>
      </div>
    )
  }
}

export default ImageSlider;
