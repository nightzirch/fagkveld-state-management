import React, { useDispatch } from "reactn";
import * as reducers from "./reducers";

const SubmitButton = props => {

  const addStuff = useDispatch(reducers.addStuffINeverWannaDoReducer);
  const resetStuff = useDispatch(reducers.resetStuffReducer);

  const handleSubmit = () => {
    addStuff();
    resetStuff();
  };

  return (
    <button onClick={handleSubmit}>
      Not gonna do
    </button>
  );
};

export default SubmitButton;
