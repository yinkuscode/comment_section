import React from "react";

function Textarea(props) {
  return (
    <div>
      <textarea
        className={`border-2 w-[30rem] h-24 rounded-md  ${props.className} `}
        name=""
        id=""
      >
        {props.children}
      </textarea>
    </div>
  );
}

export default Textarea;
