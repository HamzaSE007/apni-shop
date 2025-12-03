import React from 'react'
import SupAdminHeader from './SupAdminHeader/SupAdminHeader'
import { Outlet } from 'react-router-dom'
import SuperAdminSidebar from './SupAdminSidebar/SuperAdminSidebar'

export default function SuperAdminLayout() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>

      {/* Header */}
      <SupAdminHeader/>

      {/* Body */}
      <div className='flex w-full h-[calc(100vh)] overflow-auto'>

        {/* Sidebar */}
        <SuperAdminSidebar/>

        <div className='flex-1 p-6 pb-6 bg-gray-50 overflow-auto'>
          <Outlet/>
        </div>
      </div>

    </div>
  )
}
