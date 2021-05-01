import { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
const intialState = {
  name: "",
  description: "",
  schedule: null,
  image: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: action.payload };
    case "ADD_DESCRIPTION":
      return { ...state, description: action.payload };
    case "ADD_SCHEDULE":
      return { ...state, schedule: action.payload };
    case "ADD_IMAGE":
      return { ...state, image: action.payload };
    case "ADD_IMAGE_URL":
      return { ...state, imageUrl: action.payload };
    default:
      return state;
  }
};
const AddNewChannel = () => {
  const [{ name, description, schedule, image }, dispatch] = useReducer(
    reducer,
    intialState
  );

  const uploadImage = async (image) => {
    const next = (snapshot) => {
      console.log(snapshot.totalBytes, snapshot.bytesTransferred);
    };
    const error = (error) => {
      console.log(error);
    };
    const complete = () => {
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          db.collection("channels").add({
            name,
            description,
            schedule: new Date(schedule),
            imageUrl: url,
          });
        });
    };
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on("state_changed", next, error, complete);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((name, description, schedule, image)) {
      await uploadImage(image);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Channel Name</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "ADD_NAME", payload: e.target.value })
        }
      />
      <br />
      <label htmlFor="description">Channel Description</label>
      <br />
      <textarea
        type="text"
        id="description"
        value={description}
        onChange={(e) =>
          dispatch({ type: "ADD_DESCRIPTION", payload: e.target.value })
        }
      />
      <br />
      <label htmlFor="schedule">Schedule</label>
      <br />
      <input
        type="datetime-local"
        id="description"
        onChange={(e) => handleDateChange(e)}
      />
      <br />
      <input type="file" onChange={(e) => handleFileChange(e)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export const Dashboard = () => {
  const [channels, setChannels] = useState();
  const [addChannel, setAddChannel] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChannels(data);
    });
  }, []);
  return (
    <>
      <h1>DashBoard</h1>
      {channels?.map((channel) => (
        <div
          key={channel.id}
          onClick={() => navigate(`/channel/${channel.id}`)}>
          <h3>{channel.name}</h3>
          <p>{channel.description}</p>
        </div>
      ))}
      <button onClick={() => setAddChannel(!addChannel)}>Add Channel</button>
      {addChannel && <AddNewChannel />}
    </>
  );
};
