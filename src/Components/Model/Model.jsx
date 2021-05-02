import "./model.css";

export const Model = ({ children, isOpenModel, setIsOpenModel }) => {
  const handleClose = (e) => {
    if (e.target.id === "model-container") {
      setIsOpenModel(!isOpenModel);
    }
  };
  return (
    <>
      {isOpenModel && (
        <div className="model-container" onClick={handleClose}>
          {children}
        </div>
      )}
    </>
  );
};
