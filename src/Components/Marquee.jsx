import React from 'react'
import Marquee from "react-fast-marquee";

const Marqueey = () => {
  return (
    <Marquee speed={120} delay={2} gradient={true}>
        <div className='flex px-40 py-4 bg-red-100'>
            <h1 className='font-bold leading-7 text-red-400 font-palanquin'>!! Save an extra 20% on Nike.com or 25% in the App with code APPDAYS. Select styles only. !!</h1>
            <h1 className='ml-10 font-bold leading-7 text-red-400 font-palanquin'>JUST DO IT</h1>
            <h1 className='ml-10 font-bold leading-7 text-red-400 font-palanquin'>!!Specail reward with shopping $160+ !! Grab now!!</h1>
        </div>
    </Marquee>
  
   
  )
}

export default Marqueey