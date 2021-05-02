import React from "react";
import "./CreateChannel.css";
import close from '../../assests/images/close.svg'
export const CreateChannel = () => {
    const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
      event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // use the fileUploaded as it contains the file uploaded
  };
  return (
    <div className="create-channel">
      <div className="create-channel-wrapper f-column">
     <div className="close-icon-wrapper"> <img  className="close-icon"src={close} /></div>
          <h1 className="heading text-center p2">Create A New Channel</h1>
        {" "}
        <form class="form wrapper">
       
          <div class="form-column">
            <label for="name">Channel Name</label>
            <input
              type="text"
              id="name"
              className="form-field"
              placeholder="Enter your channel name"
            />
          </div>
          <div class="form-column">
            <label for="description">Channel Desciption</label>
            <textarea
              id="description"
              class="form-textarea"
              placeholder="Enter your channel description"
            ></textarea>
          </div>
          {/* Place to add the date time input */}
          <div className="form-column">
              <label for="file">Upload a Channel Image</label>
              <button className="button button-default" onClick={handleClick}>Upload File</button>
              <input type="file" id="file" ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}} />
          </div>
          <button class="button-primary text-center">Create Channel</button>
        </form>
      </div>
    </div>
  );
};
