import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL , name , price}) => {
  return (
 <div className='flex flex-col flex-1 w-full max-sm:w-full hover:scale-110'>
    <img src={imgURL} alt={name} className='w-[280px] h-[280px] shadow-lg' />
    <div className='mt-8 flex justify-start gap-2.5'>
    <img src={star} alt="star" width={24} height={24} />
    <p className='text-xl leading-normal font-montserrat text-slate-500'>4.5</p>

    </div>
    <h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>{name}</h3>
    <p className='mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red'>{price}</p>
 </div>
  )
}

export default PopularProductCard