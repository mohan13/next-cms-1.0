import React from "react";
import Toolbar from "../Components/Navigation/Toolbar/index";
const layout = ({ children }) => {
  return (
    <div className="flex ">
      <div>
        <Toolbar />
      </div>
      <div className="w-full h-screen">{children}</div>
    </div>
  );
};

export default layout;
