import React from "react";

function header({ title, subTitle }) {
  return (
    <div>
      <h1 className="title">
        {title}
        <span>{subTitle}</span>
      </h1>
    </div>
  );
}

export default header;
