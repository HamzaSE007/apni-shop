import React from 'react'
import DashboardHeader from '../../sharedComponents/DashboardHeader'

export default function CustomerDashboardHeader() {
  return (
    <DashboardHeader title='Customer Dashboard' titleRoute='/customerDashboard' profileName='Customer' profileRoute='/customerDashboard/profile'/>
  )
}
