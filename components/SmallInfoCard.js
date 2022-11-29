import React from 'react'
import Image from 'next/image'
import {StarIcon} from "@heroicons/react/24/solid"

function SmallInfoCard({res}) {
  return (
    <div className='flex py-0 px-0'>
        <div className='relative h-24 w-24 flex-shrink-0'>
        <Image
            src={res.img}
            layout='fill'
            objectFit='cover'
            className='rounded-2xl'
            />
        </div>
        <div className='flex flex-col pl-3 space-y-0 '>
            <div className='font-semibold '>{res.title}</div>
            
            <p>{res.price}</p>
            <p className='flex items-center'>
                <StarIcon className='h-5 text-red-400'/>
                {res.star}/5
            </p>
        </div>
    </div>
  )
}

export default SmallInfoCard