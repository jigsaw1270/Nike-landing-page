import React from 'react'
import { board } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const Board = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='flex items-center justify-center'><img src={board} alt="board-lady" className='border-8 border-red-400 rounded-lg ' />
   </div>
   <h1 className='mt-5 font-extrabold text-8xl font-montserrat max-sm:text-[72px]'>BOARD APPROVAL <br /> <span className='flex justify-center mb-4 text-coral-red'> NOT REQUIRED </span> </h1>
   <h1 className='my-2 font-montserrat text-slate-gray'>Nike Tech is engineered to the exact specification of championship</h1>
  <Button label="Suit Up" iconURL={arrowRight}></Button>
   </div>
  )
}

export default Board