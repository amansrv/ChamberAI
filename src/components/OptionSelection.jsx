// In this JSX i had to create all AI option for that will create function component[rfc]
import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">React AI App</h1>
      {/* Map all arrayItems and make them grid using classname: grid*/}
      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
