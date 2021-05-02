import { useReducer, useRef } from "react";
import { useUploadImageAndAddChannel } from "./useUploadImageAndAddChannel";
import { reducer, intialState } from "./reducer";
import "./CreateChannel.css";
import close from "../../assests/images/close.svg";

export const CreateChannel = ({ setModel }) => {
  const [
    { name, description, schedule, image, scheduleError },
    dispatch,
  ] = useReducer(reducer, intialState);
  const { uploadImageAndAddChannel } = useUploadImageAndAddChannel();
  const hiddenFileInput = useRef(null);

  const handleBrowerOpen = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (new Date(schedule).getTime() < new Date().getTime()) {
      dispatch({ type: "SCHEDULE_ERROR", payload: "Please select Valid Date" });
    } else if ((name, description, schedule, image)) {
      uploadImageAndAddChannel({ name, description, schedule, image });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      dispatch({ type: "ADD_IMAGE", payload: e.target.files[0] });
    }
  };

  const handleDateChange = (e) => {
    dispatch({ type: "ADD_SCHEDULE", payload: e.target.value });
  };
  return (
    <div className="create-channel">
      <div className="create-channel-wrapper f-column">
        <div
          className="close-icon-wrapper"
          onClick={() => setModel((prev) => !prev)}>
          {" "}
          <img className="close-icon" src={close} />
        </div>
        <h1 className="heading text-center p2">Create A New Channel</h1>{" "}
        <form class="form wrapper" onSubmit={handleSubmit}>
          <div class="form-column">
            <label htmlFor="name">Channel Name</label>
            <input
              type="text"
              id="name"
              className="form-field"
              value={name}
              onChange={(e) =>
                dispatch({ type: "ADD_NAME", payload: e.target.value })
              }
              placeholder="Enter your channel name"
              required
            />
          </div>
          <div class="form-column">
            <label htmlFor="description">Channel Desciption</label>
            <textarea
              id="description"
              className="form-textarea"
              value={description}
              onChange={(e) =>
                dispatch({ type: "ADD_DESCRIPTION", payload: e.target.value })
              }
              placeholder="Enter your channel description"
              required></textarea>
          </div>
          {/* date */}
          <div class="form-column">
            <label htmlFor="date">Schedule at</label>
            <input
              type="datetime-local"
              className="form-field"
              id="date"
              onChange={(e) => handleDateChange(e)}
              required
            />
            {!!scheduleError.length && <p>{scheduleError}</p>}
          </div>
          {/* Place to add the date time input */}
          <div className="form-column">
            <label htmlFor="file">Upload a Channel Image</label>
            <button
              className="button button-default"
              onClick={handleBrowerOpen}>
              Upload File
            </button>
            <p>{image.name}</p>
            <input
              type="file"
              id="file"
              ref={hiddenFileInput}
              onChange={(e) => handleFileChange(e)}
              style={{ display: "none" }}
              accept="image/x-png,image/gif,image/jpeg"
              required
            />
          </div>
          <button class="button-primary text-center">Create Channel</button>
        </form>
      </div>
    </div>
  );
};
