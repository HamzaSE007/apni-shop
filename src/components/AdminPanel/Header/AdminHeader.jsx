import React from 'react'
import DashboardHeader from '../../sharedComponents/DashboardHeader'

export default function AdminHeader() {
  return (
    <DashboardHeader title='Admin Dashboard' titleRoute='/admin' profileName='Admin' profileRoute='/admin/profile'/>
  )
}
