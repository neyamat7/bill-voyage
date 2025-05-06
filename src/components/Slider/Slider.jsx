import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderImage from "./SliderImage";

export default function Slider() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/slider.json");
        const data = await response.json();
        setSliderData(data);
      } catch (err) {
        throw new Error("faild to load slider data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.slogan}>
            <SliderImage
              slogan={slide.slogan}
              desc={slide.description}
              imgUrl={slide.imgUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
