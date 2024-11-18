import React from 'react'
import Header from './components/header'
import Hero from './sections/Hero'
import Advantages from './sections/Advantages'
import Hotproducts from './sections/Hotproducts'
import Contact from './sections/Contact'
import VideoPlayer from './components/videoPlayer'
import Slider from './components/slider'


const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Slider/>
    <Advantages/>
    <VideoPlayer/>
    <Hotproducts/>
    <Contact/>
    
    </>
  )
}

export default App