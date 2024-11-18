import React from 'react'
import anima from '../assets/anima.mp4.mp4'
import ReactPlayer from 'react-player'



function videoPlayer() {
  return (

    <section id="About" className=' bg-gray-900 flex flex-col justify-center mx-auto  items-center gap-6 w-full lg:px-20 sm:items-center px-10 py-20 md:items-center md:justify-center  '>


<h1 className='text-nowrap text-center text-white '>ABOUT US</h1>


      <div id='video' className=' lg:px-20 pt-6 mb-10 flex lg:flex-row mx-6 flex-col justify-start  border-t-2  border-gray-400 
         gap-10 bg-cover bg-center bg-gray-900'   >

      

        <div className='flex flex-col py-5 mt-8'>
          <div className='py-10'>
            <div className='text-blue-800 font-bold text-xl text-left justify-start  '> Consultancy</div>
            <p1 className="text-wrap text-gray-300 " >We are always ready to assist you, providing prompt and efficient responses to any enquires. Your success is our priority. We are dedicated to providing exceptional service and building lasting partnerships with our clients.</p1>
          </div>


          <div className='text-blue-800 font-bold text-xl text-left justify-start '> Management</div>
          <p1 className="text-wrap text-gray-300 " >We prioritize a holistic approach, ensuring every aspect of your operations is optimized for peak performance. With a focus on quality and efficiency we transform visions into tangible results.</p1>


          <div className='py-10'>
            <div className='text-blue-800 font-bold text-xl text-left justify-start '> After Sales Service</div>
            <p1 className="text-wrap text-gray-300 " >We offer 1 year guarantee, A year free serving, Plus free installation on your first purchase. Stay ahead with our innovative solutions that leverage the latest technology to enhance efficiency and performance.</p1>
          </div>


          <div className='text-blue-800 font-bold text-xl text-left justify-start '> Support</div>
          <p1 className="text-wrap text-gray-300 " >Behind every challenge lies an opportunity for unparalleled assistance. We understand the intricacies of your needs and are committed to providing prompt assistance every step of the way.</p1>


        </div>



        <div className=' mt-20  p-10 rounded-2xl md:justify-center md:pb-20 items-center'>
          <ReactPlayer controls={false} muted={true} playing={true} url={anima} height="" width="" style={{


            borderRadius: '1rem', // equivalent to `rounded-xl`
            overflow: 'hidden',    // ensures the rounded edges are clean
          }} />
        </div>
      </div>

    </section>
  )
}

export default videoPlayer