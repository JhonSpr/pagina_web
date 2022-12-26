import React from "react";
import banner from "../../Json/Banners.json";
export function Banners() {
  let end = 3;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);

  return <>{banner && banner[RandomNumber].image} </>;
}
