import React from 'react'
import video from '../assets/Goddy.mp4'
import ReactPlayer from 'react-player'



function videoPlayer() {
  return (

    <section className=' bg-gray-900 flex flex-col justify-center mx-auto  items-center gap-6 w-full lg:px-20 sm:items-center px-10 py-20 md:items-center '>

      <div class="border-t border-gray-300 h-16 mx-4"></div>



      <div id='video' className=' lg:px-20 pt-5 flex lg:flex-row mx-4 flex-col justify-center items-center border-t-2 border-gray-400
         gap-10 bg-cover bg-center bg-slate-900'   >


        <h3 className='text-blue-800 font-bold text-5xl sm:text-wrap text-center '>PRODUCT INTRODUCTION VIDEO </h3>

        <ReactPlayer controls={true} playing={false} url={video} height="700px" width="600px" style={{


          borderRadius: '1rem', // equivalent to `rounded-xl`
          overflow: 'hidden',    // ensures the rounded edges are clean
        }} />
      </div>

    </section>
  )
}

export default videoPlayer