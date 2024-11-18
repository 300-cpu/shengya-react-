import React, { useEffect } from 'react'
import logo from '../assets/logo.jpeg'
import heroim from '../assets/heroim.png'
import sheng from '../assets/sheng.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])



  return (
    <section id='hero' className='w-full h-fit lg:px-20 pt-20 flex lg:flex-row flex-col justify-center items-center 
    gap-20 bg-cover bg-center bg-slate-200'   >

      <div id='hero-image' className='lg:w-[40%] w-full flex flex-col justify-end items end md:item-center sm:items-center'>
        <img src={heroim} alt="" width={600} height={700} classname='' />
      </div>
      <div id='content-hero' className='flex flex-col justify-center items-center gap-10 lg:w-[60%] sm:  px-10
       w-full pb-20'>

        <h1 data-aos="zoom-in-up" className='lg:text-6xl text-5xl text-black front-bold text-center '>
          SHENGYA MACHINERY NIGERIA
        </h1>
        <p data-aos="zoom-in" className='text-xl font-semibold text-slate-600 text-justify '>Shengya Machinery Co., Ltd has been specializing
          in design, manufacturing and sales of Concrete Block Making Machines.
          With advanced equipments, excellent professional technology and 30-years of
          practical experience in block making
          machine market development. Being at the forefront of market in the developing of Block Making Machines and other construction Materials
          Shengya is paying close attention to advanced technology at home and abroad,
          developing different
          products which are suitable to different investment needs from customers</p>

        <div data-aos='zoom-in-down' className='flex flex-wrap  '>
          <p className='text-bold text-green-400 px-2'>NIGERIA</p>
          <p className='text-bold text-red-400 px-2 '>TANZANIA</p> <p className='text-bold text-purple-400 px-2'>ALGERIA</p>
          <p className='text-bold text-blue-400 px-2'>CAMEROON</p>  <p className='text-bold text-yellow-400 px-2 '>KENYA</p>

          <p className='text-bold text-orange-900 px-2'>COTE DIVOIRE</p><p className='text-bold text-yellow-400 px-2'>DR CONGO</p>

        </div>
        <a href='https://wa.link/8ss9nd' target='_blank' rel='' >
        <button data-aos="fade-in" className='  rounded-xl px-10 py-4 bg-transparent border-[3px]  border-black front bold hover:text-white'>CONTACT US</button>
        </a>
      </div>







    </section>
  )
}

export default Hero