import { useState } from 'react'
import CounterApp from './counter'
import ContentCard from './ContentCard'

function App() {
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
    
    </>
  )
}

export default App
