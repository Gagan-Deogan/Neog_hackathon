export const intialState = {
  name: "",
  description: "",
  schedule: null,
  image: "",
  scheduleError: "",
};
export const reducer = (state, action) => {
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
    case "SCHEDULE_ERROR":
      return { ...state, scheduleError: action.payload };
    default:
      return state;
  }
};
