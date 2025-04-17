'use client';
import React from 'react'
import PropertyCard from '../common/propertyCard'

const section = () => {
  const data = [...Array(10)];
  return (
    
        <div className=" grid-cols-4 gap-x-5 gap-y-24 grid">
          {data.map((item) => (
              <PropertyCard key={item} img={'/room.jpg'}/>
            
          ))}
        </div>
  )
}

export default section