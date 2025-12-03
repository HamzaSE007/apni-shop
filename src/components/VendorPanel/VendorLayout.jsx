import React from 'react'
import { VendorHeader, VendorSidebar } from './vendorIndex'
import { Outlet } from 'react-router-dom'

export default function VendorLayout() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>

      {/* Header */}
      <VendorHeader/>

      {/* Body */}
      <div className='flex w-full h-[calc(100vh)] overflow-auto'>

        {/* Sidebar */}
        <VendorSidebar/>

        <div className='flex-1 p-6 pb-6 bg-gray-50 overflow-auto'>
          <Outlet/>
        </div>
      </div>

    </div>
  )
}
