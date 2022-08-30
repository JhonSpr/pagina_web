import { useState } from "react";
import Animes from "../Data.json";

export function AnimesRecommend() {
  Animes = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
}
