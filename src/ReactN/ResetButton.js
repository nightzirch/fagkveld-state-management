import React, { useDispatch, useGlobal } from "reactn";
import * as reducers from "./reducers";

const ResetButton = props => {
  const [stuffINeverWannaDo] = useGlobal("stuffINeverWannaDo");

  const resetAllStuff = useDispatch(reducers.resetStuffINeverWannaDoReducer);

  return (
    <button
      className="reset"
      disabled={stuffINeverWannaDo.length === 0}
      onClick={() => resetAllStuff()}
    >
      Reset {stuffINeverWannaDo.length} stuff I never wanna do
    </button>
  );
};

export default ResetButton;
