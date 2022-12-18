import React from "react";
import banner from "../../Json/Banners.json";
export function Banner() {
  let end = 2;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);

  return (
    <img src={banner && banner[RandomNumber].image} className="image_baner" />
  );
}
