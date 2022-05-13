import React from 'react'
import Image from 'next/image'
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Featured.module.css'
import "swiper/css";
import "swiper/css/pagination";

export  const Featured = () => {
  return (
    <div className={styles.container}>
      <Swiper pagination={true} modules={[Pagination]} cssMode={true} className="mySwiper">
        <SwiperSlide><Image src='/img/macaron-promotion.png' alt='' layout="fill" objectFit="cover"  /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}
