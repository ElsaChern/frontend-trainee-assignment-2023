/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";

import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ screenshots }) => {
  return (
    <Box>
      {screenshots?.length ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation
          modules={[FreeMode, Navigation]}
        >
          {screenshots?.map((screenshot) => (
            <SwiperSlide key={screenshot.id}>
              <img src={screenshot.image} alt="Изображение" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Typography>Скриншоты не найдены</Typography>
      )}
    </Box>
  );
};

export default Slider;
