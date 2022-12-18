import React from "react";
import Banner from "../../Json/Banners.json";
export function Banner() {
  let end = 3;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);

  return (
    <img src={Banner && Banner[RandomNumber].image} className="image_baner" />
  );
}
