import React from "react";
import NavItems from "../NavItems/index";
const Index = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-60  gap-14 text-Headline bg-background">
      <div>
        <div className="text-Headline font-medium text-4xl text-center mt-2">
          CMS Design
        </div>
        <div className="mt-10">
          <NavItems />
        </div>
      </div>
      <div className="text-sm">
        @copyright all reserved to mohanGurung2022
      </div>
    </div>
  );
};

export default Index;
