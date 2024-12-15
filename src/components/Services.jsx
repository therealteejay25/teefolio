import React from 'react'
import ServicesCards from './ServicesCards'

const Services = () => {
  return (
    <div id='services' className='bg-dark min-h-screen p-5'>
         <h3 className="text-main text-xl font-semibold text-center">Services</h3>
         <div>
            <ServicesCards />
         </div>
    </div>
  )
}

export default Services