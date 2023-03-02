"use client";

import { NextFont } from "@next/font";
import Image, { StaticImageData } from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay} from 'swiper';

import { SliderItem } from "./functions/SliderItem";

import Styles from './Banner.module.css'
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface IBanner {
  primaryFont: NextFont;
}
export interface ISlider { 
  image: StaticImageData
  id: number
}

const Banner = (props: IBanner) => {
  const { primaryFont } = props;

  return (
    <div className={`${primaryFont.className} ${Styles.ContainerSlider}`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        className={Styles.Slider}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {SliderItem.map((item:ISlider) => (
          <SwiperSlide className={Styles.SwiperSlide} key={item.id}>
            <Image className={Styles.image} alt='images' src={item.image}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
