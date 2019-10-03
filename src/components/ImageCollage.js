import "../App.css";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ImageCollage extends Component {
  render() {
    const filterImages = () => {
      return this.props.images.filter(image => {
        return image.board_id === this.props.board.id;
      });
    };

    //************************************************ */

    return (
      <div>
        <Carousel autoPlay>
          {filterImages().map(image => {
            return (
              <div className="carousel">
                <img
                  className="ui fluid image"
                  key={image.id}
                  src={image.url}
                  alt={image.title}
                ></img>
                <h4 className="legend">{image.title}</h4>
              </div>
            );
          })}
          {/* end mapping over images */}
        </Carousel>
        <br></br>
        <button className="ui button" onClick={this.addImage}>
          Add an Image to your Vision Board!
        </button>
      </div>
    );
  }
}

export default ImageCollage;
