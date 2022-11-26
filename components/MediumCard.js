import React from 'react'
import Image from 'next/image'
function MediumCard({img,title}) {
  return (
    <div className='hover:scale-105 transition transform duration-200 ease-out cursor-pointer'>
        <div className='relative h-80 w-80'>
            <Image
            src={img}
            layout='fill'
            className='rounded-md'
            alt=''
            />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard