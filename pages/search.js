import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {format} from 'date-fns'
import InfoCard from '../components/InfoCard'
// import Map from '../components/Map'
import NewMap from '../components/NewMap'
import dynamic from 'next/dynamic'
function Search({searchResults}) {
    const router=useRouter();
    const formattedStartDate= format(new Date(router.query.startDate),"dd MMM yyyy")
    const formattedEndDate= format(new Date(router.query.endDate),"dd MMM yyyy")
    const range=`${formattedStartDate}-${formattedEndDate}`
    const MapWithNoSSR = dynamic(() => import('../components/Map'), {
        ssr: false,
    });
  return (
    <div className='h-screen'>
        <Header placeholder={`${router.query.location} | ${range} | ${router.query.people} people`}/>
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                
                <p className='text-xs'>200+ choices from {range} for {router.query.people} people.</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {router.query.location}.</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='px-4 py-2 border rounded-full 
                    cursor-pointer hover:shadow-lg active:scale-95
                     active:bg-gray-100 transition transform 
                     duration-100 ease-out'>
                        Cancelation Flexibility
                    </p>
                    <p className='px-4 py-2 border rounded-full 
                    cursor-pointer hover:shadow-lg active:scale-95
                     active:bg-gray-100 transition transform 
                     duration-100 ease-out'>
                        Type of Place
                    </p>
                    <p className='px-4 py-2 border rounded-full 
                    cursor-pointer hover:shadow-lg active:scale-95
                     active:bg-gray-100 transition transform 
                     duration-100 ease-out'>
                        Price
                    </p>
                    <p className='px-4 py-2 border rounded-full 
                    cursor-pointer hover:shadow-lg active:scale-95
                     active:bg-gray-100 transition transform 
                     duration-100 ease-out'>
                        Rooms and Beds
                    </p>
                    <p className='px-4 py-2 border rounded-full 
                    cursor-pointer hover:shadow-lg active:scale-95
                     active:bg-gray-100 transition transform 
                     duration-100 ease-out'>
                        More Filters
                    </p>
                </div>
                <div className='flex flex-col'>
                    {searchResults.map(item=>(
                        <InfoCard
                        key={item.img}
                        img={item.img}
                        location={item.location}
                        title={item.title}
                        description={item.description}
                        star={item.star}
                        price={item.price}
                        total={item.total}
                        />
                    ))}
                </div>
            </section>
            <section className='hideen xl:inline-flex xl:min-w-[600px] flex-grow relative  '>
                <div className='sticky' >
                <MapWithNoSSR searchResults={searchResults}/>
                
                </div>
            
            </section>
        </main>
        <Footer className='static z-10'/>
    </div>
  )
}

export default Search
export async function getServerSideProps(){
    const searchResults=await fetch("https://www.jsonkeeper.com/b/5NPS").then(res=>res.json());
    return {
        props:{
            searchResults
        }
    }
}