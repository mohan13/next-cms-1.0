import React from "react";

const index = ({ PostsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / PostsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className=" w-full mt-4">
      <div className="flex gap-4 justify-center ">
        {pageNumbers.map((Numbers) => {
          return (
            <div
              key={Numbers}
              onClick={() => paginate(Numbers)}
              className="border cursor-pointer border-indigo-400 py-1 font-medium px-2"
            >
              {Numbers}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
