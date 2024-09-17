/* eslint-disable no-unused-vars */
import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import './UploadSection.css';

const UploadSection = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = React.useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);
  

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-[98vh] h-[75vh] flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
      <div className="text-gray-400 text-center mb-0">
        

      </div>

      <div className="w-[95vh] h-[95vh] ">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          height="100%"
          videoConstraints={{ facingMode: "user",deviceId: "f0485ccf24c359cc51dcea65988f0bf53d93d30fc9a7be696c043f78a54fb99c" }} // Use "user" for the front camera
          style={{ objectFit: 'contain' }}
        />
        
        
       
      </div>
    </div>
  );
};

export default UploadSection;
