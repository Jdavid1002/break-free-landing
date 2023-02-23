"use client";

import { NextFont } from "@next/font";
import { Swiper, SwiperSlide } from "swiper/react";

import {Pagination, Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image'
import Styles from './Banner.module.css'
import SlideOne from './images/SlideOne.jpg'
import SlideTwo from './images/SlideTwo.jpg'
import SlideThree from './images/SlideThree.jpg'
import SlideFour from './images/SlideFour.jpg'


interface IBanner {
  primaryFont: NextFont;
}
interface ISlider { 
  image: any
  id: number
}

const SliderItem = [
  {
    image: SlideOne,
    id: 1,
  },
  {
    image: SlideTwo,
    id: 2,
  },{
    image: SlideThree,
    id: 3,
  },
  {
    image: SlideFour,
    id: 4,
  }
];


const Banner = (props: IBanner) => {
  const { primaryFont } = props;

  return (
    <div className={`${primaryFont.className} ${Styles.ContainerSlider}`}>
      <Swiper
        modules={[Pagination,Autoplay]}
        className={Styles.Slider}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        pagination={{clickable: true}}
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
