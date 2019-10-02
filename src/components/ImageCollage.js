import React from "react";
import "../App.css";
import Image from "./Image.js";

const filterImages = () => {
  return this.props.images.filter(image => {
    return image.board_id === this.props.board.id;
  });
};

const renderImages = () => {
  return this.filterImages().map(image => {
    return <Image key={image.id} image={image} board={this.props.board} />;
  });
};

const ImageCollage = props => {
  return (
    <div className="ui image container">
      <div className="ui grid">
        <div className="">
          {props.images.map(image => {
            return (
              <img src={image.url} alt={image.title} className="board"></img>
            );
          })}
          {/* <img src="https://picsum.photos/id/29/1200/600" alt="mountain"></img>
          <img
            src="https://picsum.photos/id/121/1200/600"
            alt="mountain2"
          ></img> */}
        </div>
      </div>
      <button>Add an Image</button>
    </div>
  );
};

export default ImageCollage;
