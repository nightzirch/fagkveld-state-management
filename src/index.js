import React from "react";
import { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import AppWithState from "./State/App";
import AppWithReactN from "./ReactN/App";
import "./styles.scss";

const APP = {
  STATE: <AppWithState />,
  REACTN: <AppWithReactN />
};

setGlobal({
  stuff: "",
  stuffINeverWannaDo: []
});

ReactDOM.render(APP.STATE, document.getElementById("root"));