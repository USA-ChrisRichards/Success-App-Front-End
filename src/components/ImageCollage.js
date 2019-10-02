import "../App.css";
import React, { Component } from "react";
// import Image from "./Image.js";

// const renderImages = () => {
//   return this.filterImages().map(image => {
//     return <Image key={image.id} image={image} board={this.props.board} />;
//   });
// };

class ImageCollage extends Component {
  render() {
    const filterImages = () => {
      return this.props.images.filter(image => {
        return image.board_id === this.props.board.id;
      });
    };
    return (
      <div className="ui image container">
        <div className="ui grid">
          <div className="">
            {filterImages().map(image => {
              return (
                <img
                  src={image.url}
                  alt={image.title}
                  className="board images"
                ></img>
              );
            })}
          </div>
        </div>
        <button>Add an Image</button>
      </div>
    );
  }
}

export default ImageCollage;

// const ImageCollage = props => {
//   return (
//     <div className="ui image container">
//       <div className="ui grid">
//         <div className="">
//           {filterImages().map(image => {
//             return (
//               <img
//                 src={image.url}
//                 alt={image.title}
//                 className="board images"
//               ></img>
//             );
//           })}
//         </div>
//       </div>
//       <button>Add an Image</button>
//     </div>
//   );
// };

// export default ImageCollage;
