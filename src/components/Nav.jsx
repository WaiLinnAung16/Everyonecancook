import React from "react";

const Nav = (props) => {
  return (
    <div className="flex items-center gap-3 w-full py-3 pl-5 border-b transition-all duration-500 hover:pl-8">
      {props.children}
    </div>
  );
};

export default Nav;
