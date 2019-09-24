import React from "react";
import "../App.css";

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
          <img src="https://picsum.photos/id/29/1200/600" alt="mountain"></img>
          <img
            src="https://picsum.photos/id/121/1200/600"
            alt="mountain2"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
