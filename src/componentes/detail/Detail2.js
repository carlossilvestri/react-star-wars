import React from "react";

export const Detail2 = ({key, value}) => {
  return (
    <div className="text-container" >
      <p>{key}</p>
      <p className="p-info">{value}</p>
    </div>
  );
};
