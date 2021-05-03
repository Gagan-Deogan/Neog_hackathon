export const reducer = (state, action) => {
  switch (action.type) {
    case "INITAIL":
      return { isShow: false, alertType: "" };
    case "DEFAULT":
      return { isShow: true, alertType: "DEFAULT", msg: action.payload };
    case "ERROR":
      return { isShow: true, alertType: "ERROR", msg: action.payload };
    case "WARNING":
      return { isShow: true, alertType: "WARNING", msg: action.payload };
    case "SUCCESS":
      return { isShow: true, alertType: "SUCCESS", msg: action.payload };
    default:
      return state;
  }
};
