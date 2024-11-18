import React from 'react'
import sheng from '../assets/sheng.jpeg'
import mac from '../assets/mac.png'
import img9 from '../assets/img9.png'
import banner from '../assets/banner.jpg'
import brick from '../assets/brick.png'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function slider() {
  return (
    <Swiper
      className=' lg:px-20 pt-20 flex lg:flex-row flex-col 
     bg-slate-900'
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      autoplay={{ delay: 5000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide ><div id='hero-image' className='lg:w-[100%] flex flex-col justify-end items-center md:item-center sm:items-center'>
        <img src={sheng} style={{


          borderRadius: '2rem', // equivalent to `rounded-xl`
          overflow: 'hidden',    // ensures the rounded edges are clean
        }} alt="QT5-20 machine" /><p1 className='text-white lg:text-4xl md:text-xl text-center '  >QT5-20 BLOCK-FORMING MACHINE </p1>
      </div></SwiperSlide>
      <SwiperSlide ><div id='hero-image' className='lg:w-[100%] flex flex-col justify-end items-center md:item-center sm:items-center'>

        <img src={mac} style={{


          borderRadius: '1rem', // equivalent to `rounded-xl`
          overflow: 'hidden',    // ensures the rounded edges are clean
        }} alt="QTj-20 machine" /><p1 className='text-white lg:text-4xl md:text-xl text-center '  >QTJ4-25 BLOCK MACHINE </p1>
      </div></SwiperSlide>
      <SwiperSlide ><div id='hero-image' className='lg:w-[100%] flex flex-col justify-end items-center md:item-center sm:items-center'>
        <img src={img9} style={{


          borderRadius: '1rem', // equivalent to `rounded-xl`
          overflow: 'hidden',    // ensures the rounded edges are clean
        }} alt="QTj-20 machine" /><p1 className='text-white lg:text-4xl md:text-xl text-center '  >QTJ4-26 BLOCK MOULDING MACHINE  </p1>
      </div></SwiperSlide>
      <SwiperSlide ><div id='hero-image' className='lg:w-[100%] flex flex-col justify-end items-center md:item-center sm:items-center'>
        <img src={banner} alt="QTj-20 machine" />
      </div></SwiperSlide>


      <SwiperSlide ><div id='hero-image' className='lg:w-[100%] flex flex-col justify-end items-center md:item-center sm:items-center'>
        <img src={brick} style={{


          borderRadius: '1rem', // equivalent to `rounded-xl`
          overflow: 'hidden',    // ensures the rounded edges are clean
        }} alt="QTj-20 machine" /><p1 className='text-white lg:text-4xl md:text-xl text-center '  >    QM2-40 BRICK MACHINE  </p1>
      </div></SwiperSlide>

    </Swiper>

  )
}

export default slider



