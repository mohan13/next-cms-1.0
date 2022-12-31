import React from "react";
import NavItem from "../NavItem/index";
import { NavData } from "../NavData";
const Index = () => {
  return (
    <div className="flex flex-col gap-10 justify-start ">
      {NavData?.map((val, i) => {
        return (
          <div key={i}>
            <div>
              <NavItem Path={val.path} Icon={val.icon} Title={val.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
