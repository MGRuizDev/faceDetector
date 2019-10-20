import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({onInputChange, onDetectClick}) => {
  return (
    <div className="form_comp">
        <p className=" f4 ">This App will detect faces in your pictures</p>
        <div style={{ display: 'flex', justifyContent:'center'}}>
            <form>
                <input type="text"placeholder="/path/to/picture.png" className="w-70" onChange={onInputChange}></input>
                <button type="submit" className="w-30 grow pointer" onClick={onDetectClick}>Detect</button>
            </form>
        </div>
    </div>
  );
}

export default ImageLinkForm;