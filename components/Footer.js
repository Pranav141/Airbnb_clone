import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='text-sm space-y-4 text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='text-sm space-y-4 text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibilty</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>By</p>
            <p>Pranav Kokate</p>
        </div>
        <div className='text-sm space-y-4 text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Pranav</p>
            <p>Presents</p>
            <p>Airbnb </p>
            <p>Clone</p>
            <p>Enjoy!!</p>
        </div>
        <div className='text-sm space-y-4 text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Customer Care</p>
            <p>Report</p>
            <p>Compliants</p>
        </div>
    </div>
  )
}

export default Footer