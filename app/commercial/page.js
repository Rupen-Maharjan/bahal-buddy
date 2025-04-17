'use client'
import { CommercialHeader } from '@/components/export'
import React from 'react'

const page = () => {
  return (
    <div className="mb-10 flex justify-center items-center min-h-screen">
      <div className="grid gap-5 mt-10">

      <h1 className="text-2xl">Commercial</h1>
      <CommercialHeader />
      </div>
    </div>
  )
}

export default page