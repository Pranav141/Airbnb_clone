import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import {GlobeAltIcon,Bars3Icon} from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto '>
            <Image 
            src="https://links.papareact.com/qd3"
            layout='fill'
            objectFit='contain'
            objectPosition="left"
            className=''
            priority='true'
            />
    
        </div>
        <div className='flex flex-row items-center rounded-full  border-2 py-2 md:shadow-sm'>
            <input type="text" placeholder='Start your Search' className='pl-3 bg-transparent flex-grow outline-none text-gray-800 placeholder-grey-400'/>
            <MagnifyingGlassIcon className='hidden md:inline-flex h-8 rounded-full bg-red-400 text-white p-2 cursor-pointer md:mx-2'/>
            
        </div>
        <div className='flex flex-row space-x-4 items-center justify-end text-gray-700'>
            <p className='hidden md:inline-flex cursor-pointer'>Become an Host</p>
            <GlobeAltIcon className='h-6'/>
            <div className='border-2 flex rounded-full p-2 space-x-2'>

            <Bars3Icon className='h-6'/>
            <UserCircleIcon className='h-6'/>
            </div>
            {/* <UserIcon className='h-8'/> */}
        </div>

    </header>
  )
}

export default Header