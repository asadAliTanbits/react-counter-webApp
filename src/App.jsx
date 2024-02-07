import { useState } from 'react'
import CounterApp from './counter'
import ContentCard from './ContentCard'
import Carosuel from './carosuel'
import FAQs from './FAQs'

function App() {
  const images=[
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 2,
      title: "How much does it cost?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 3,
      title: "When can I get it?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
  ];
  return (
    <>
    <div className='w-full h-screen flex justify-center bg-zinc-900 p-4'>
        <CounterApp />
    </div>
    <div className='flex flex-row'>
    <ContentCard  
        imgUrl="https://sofadesign.pk/wp-content/uploads/2021/06/Modway-Frame-Transitional-Trellis-5-X-8-Area-Rug-In-Black_white.jpg"
        title="Sofa" 
        detail="Luxury Sofa"/>
    <ContentCard  
        imgUrl="https://sofadesign.pk/wp-content/uploads/2021/06/Modway-Frame-Transitional-Trellis-5-X-8-Area-Rug-In-Black_white.jpg"
        title="Sofa" 
        detail="Luxury Sofa"/>
    <ContentCard  
        imgUrl="https://sofadesign.pk/wp-content/uploads/2021/06/Modway-Frame-Transitional-Trellis-5-X-8-Area-Rug-In-Black_white.jpg"
        title="Sofa" 
        detail="Luxury Sofa"/>
    <ContentCard  
        imgUrl="https://sofadesign.pk/wp-content/uploads/2021/06/Modway-Frame-Transitional-Trellis-5-X-8-Area-Rug-In-Black_white.jpg"
        title="Sofa" 
        detail="Luxury Sofa"/>
    </div>
    <Carosuel images={images} />
    <FAQs question={questions}/>
    </>
  )
}

export default App
