import "./snakbar.css";
import { useEffect } from "react";
import { useSnakbarContext } from "../../Context/SnakbarContext";
export const Snakbar = () => {
  const { snakbarStatus, snakbarDispatch } = useSnakbarContext();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      snakbarDispatch({ type: "INITAIL" });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const checkTypeOfSnakbar = (type) => {
    switch (type) {
      case "ERROR":
        return "snakbar-err";
      case "SUCCESS":
        return "snakbar-suc";
      case "WARNING":
        return "snakbar-war";
      default:
        return "snakbar";
    }
  };

  const snakbarType = checkTypeOfSnakbar(snakbarStatus["alertType"]);
  return (
    <div className={snakbarType}>
      <h5>{snakbarStatus["msg"]}</h5>
    </div>
  );
};
