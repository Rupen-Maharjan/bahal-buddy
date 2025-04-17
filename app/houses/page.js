'use client'
import { HouseHeader } from '@/components/export'
import React from 'react'

const page = () => {
  return (
    <div className="mb-10 flex justify-center items-center min-h-screen">
      <div className="grid gap-5 mt-10">

      <h1 className="text-2xl">Houses</h1>
      <HouseHeader/>
      </div>
    </div>
  )
}

export default page