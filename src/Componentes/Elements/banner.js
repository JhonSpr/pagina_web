import React from "react";
import banner from "../../Json/Banners.json";
export function Banners() {
  let end = 16;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);

  return <div>{banner && banner[RandomNumber].image} </div>;
}
