import {React,useState} from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/24/solid'
import {GlobeAltIcon,Bars3Icon} from '@heroicons/react/24/outline'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
function Header({placeholder}) {
  const [searchInput,setSearch]=useState("")
  const [startDate,setStartDate]=useState(new Date())
  const [endDate,setEndDate]=useState(new Date())
  const [people,setPeople]=useState(1)

  const router=useRouter();
  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const resetInput=()=>{
    setSearch("")
  }
  const search=()=>{
    router.push({
      pathname:"/search",
      query:{
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        people:people
      }
    })
  }
  console.log(people);
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div onClick={()=>router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto '>
            <Image 
            src="https://links.papareact.com/qd3"
            layout='fill'
            objectFit='contain'
            objectPosition="left"
            className=''
            priority='true'
            alt=''
            />
    
        </div>
        <div className='flex flex-row items-center rounded-full  border-2 py-2 md:shadow-sm'>
            <input type="text" placeholder={placeholder || 'Start your Search'} className='pl-3 bg-transparent flex-grow outline-none text-gray-800 placeholder-grey-400' value={searchInput} onChange={(e)=>setSearch(e.target.value)}/>
            <MagnifyingGlassIcon className='hidden lg:inline-flex h-8 rounded-full bg-red-400 text-white p-2 cursor-pointer md:mx-2' onClick={search}/>
            
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
        {searchInput && (
          <div className='flex flex-col col-span-3 mx-auto mt-3'>
            <DateRangePicker
              ranges={[selectionRange]}
              rangeColors={["#FD5861"]}
              minDate={new Date()}
              onChange={handleSelect}
            />
            <div className='flex items-center border-b mb-1'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
              <UsersIcon className='h-5'/>
              <input type="number" 
              className='w-12 pl-2 text-lg outline-none text-red-400' 
              value={people} 
              onChange={e=>setPeople(e.target.value)}
              min={1}
              />
            </div>
            <div className='flex'>
              <button onClick={resetInput} className="flex-grow ">Cancel</button>
              <button onClick={search} className="flex-grow text-red-400">Search</button>
            </div>
          </div>

        )}
    </header>
  )
}

export default Header