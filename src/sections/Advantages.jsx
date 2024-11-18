import React, { useEffect } from 'react'
import { chooseus } from '../components/export'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'
import whatapp from '../assets/whatapp.png'






const Advantages = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])




  return (

    <>
      <section id='about' className=' bg-gray-900 flex flex-col justify-center items-center gap-6 w-full lg:px-20 sm:items-center px-10 py-20 md:items-center '>
        <h1 data-aos="zoom-in-up" className='text-blue-800 font-bold text-5xl text-center '>RECOMMENDED PRODUCTS</h1>
        <p1 data-aos="fadde-in" className='text-blue-800 text-xl text-center '  >Discover our most recommended products, backed by rave reviews and expert approval.!</p1>

        <div className=' flex lg:flex-row flex-col justify-center items-center gap-10 mt-10'></div>

        {
         
          chooseus.map((item, index) => (

            <div data-aos="slide-up" key={index} className='bg-yellow-600 p-10 rounded-xl flex flex-col justify-center items-center gap-4'>
              <img src={item.image} alt="image" className='h-[500px] w-[500px]  transtion duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 cursur-pointer rounded-2xl ' />

              <h1 className='text-xl front-bold text-slate-100'>{item.heading}</h1>
              <p className='text-justify trucate max-w-96 text-slate-700 text-lg'>{item.para}</p>
              <a href='https://wa.link/8ss9nd' target='_blank' rel='' >
              <img src={whatapp} className=" h-16" /> 
              </a>


            </div>
          ))


        }


      </section>








    </>
  )
}

export default Advantages