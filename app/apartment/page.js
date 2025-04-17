'use client'
import { Aheader } from '@/components/export'
import React from 'react'

const page = () => {
  return (
    <div className="mb-10 flex justify-center items-center min-h-screen">
      <div className="grid gap-y-10 mt-10">

      <h1 className="text-2xl">Appartments</h1>
      <Aheader/>
      </div>
    </div>
  )
}

export default page