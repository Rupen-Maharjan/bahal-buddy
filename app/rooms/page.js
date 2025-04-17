'use client'
import { Rheader } from '@/components/export'
import React from 'react'

const page = () => {
  return (
    <div className="mb-10 flex justify-center items-center min-h-screen">
      <div className="grid gap-5 mt-10">

      <h1 className="text-2xl">Rooms</h1>
      <Rheader/>
      </div>
    </div>
  )
}

export default page