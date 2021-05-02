import { v4 as uuidv4 } from "uuid";
import { useAuthContext } from "../../Context/AuthContext";
import { storage, db } from "../../firebase";
import { useSnakbarContext } from "../../Context/SnakbarContext";
export const useUploadImageAndAddChannel = () => {
  const { user } = useAuthContext();
  const { snakbarDispatch } = useSnakbarContext();
  const uploadImageAndAddChannel = ({ name, description, schedule, image }) => {
    const imageUniqueName = image.name + uuidv4();
    const next = (snapshot) => {
      console.log(snapshot.totalBytes, snapshot.bytesTransferred);
    };
    const error = (error) => {
      console.log(error);
    };
    const complete = () => {
      storage
        .ref("images")
        .child(imageUniqueName)
        .getDownloadURL()
        .then((url) => {
          db.collection("channels")
            .add({
              name,
              description,
              schedule: new Date(schedule),
              imageUrl: url,
              owner: user.uid,
              createdBy: user.displayName,
            })
            .then(() => {
              snakbarDispatch({
                type: "SUCCESS",
                payload: "Channel Created Successfully",
              });
            });
        });
    };
    const uploadTask = storage.ref(`images/${imageUniqueName}`).put(image);
    uploadTask.on("state_changed", next, error, complete);
  };
  return { uploadImageAndAddChannel };
};
