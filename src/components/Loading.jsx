import React from "react";

export const Children = () => {
  return (
    <div className="col-span-3 p-5 rounded bg-slate-50 animate-pulse ">
      <div className=" mb-5 h-[300px] bg-gray-300"></div>
      <div className="flex justify-between items-center">
        <h1 className="h-9 w-60 bg-gray-300"></h1>
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <>
      <Children />
      <Children />
      <Children />
      <Children />
    </>
  );
};

export default Loading;
