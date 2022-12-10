import React, { Component } from "react";
import Slider from "react-slick";
import {
  AnimeRecommend1,
  AnimeRecommend2,
  AnimeRecommend3,
  AnimeRecommend4,
} from "./Recomends";

export default class AutoPlay extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 100,
      swipeToSlide: true,
      autoplaySpeed: 5000,
      touchMove: true,
      cssEase: "linear",
      PauseOnHover: true,
      swipe: true,
      draggable: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      useTransform: true,
      slidesPerRow: true,
    };

    return (
      <div
        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Slider {...settings}>
          <div>
            <article>
              <figure class="image">
                <AnimeRecommend4 />
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <AnimeRecommend3 />
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <AnimeRecommend2 />
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <AnimeRecommend1 />
              </figure>
            </article>
          </div>
        </Slider>
      </div>
    );
  }
}
