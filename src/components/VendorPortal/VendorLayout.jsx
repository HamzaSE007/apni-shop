import React from 'react'
import { VendorHeader, VendorSidebar } from './vendorIndex'
import { Outlet } from 'react-router-dom'

export default function VendorLayout() {
  return (
    <div className='flex flex-col overflow-hidden'>

      {/* Header */}
      <VendorHeader/>

      {/* Body */}
      <div className='flex w-full h-[calc(100vh)]'>

        {/* Sidebar */}
        <VendorSidebar/>

        <div className='flex-1 p-6 pb-6 bg-gray-50 overflow-y-auto'>
          <Outlet/>
        </div>
      </div>

    </div>
  )
}
