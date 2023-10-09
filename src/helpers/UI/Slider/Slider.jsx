/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ screenshots }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation={true}
      modules={[FreeMode, Navigation]}
    >
      {screenshots?.map((screenshot) => (
        <SwiperSlide key={screenshot.id}>
          <img src={screenshot.image} alt="Изображение" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
