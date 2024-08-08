import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import "../css/ImageFrom.css";
import { FaCamera } from "react-icons/fa";

const ImageForm = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  const takePhoto = () => {
    if (camera.current) {
      const photo = camera.current.takePhoto();
      setImage(photo);
    }
  };

  return (
    <div className="form-container">
      <div className="camera-container">
        <Camera ref={camera} className="camera" />
      </div>
      <button onClick={takePhoto}>
        Take photo
        {/* <FaCamera size={40} /> */}
      </button>
      {image && <img src={image} alt="A photo taken by the user" />}
    </div>
  );
};

export default ImageForm;
