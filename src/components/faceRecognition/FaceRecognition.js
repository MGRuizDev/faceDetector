import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ inputUrl, boxRecognition }) => {
  return (
    <div className='center'>
        <div className='absolute'>
            <img id='inputImage' alt='' src={inputUrl} width='500px' height='auto'></img>
            <div className='box' style={{top:boxRecognition.topRow, right:boxRecognition.rightCol, bottom:boxRecognition.bottomRow, left:boxRecognition.leftCol}}></div>
        </div>
    </div>
  );
}

export default FaceRecognition;