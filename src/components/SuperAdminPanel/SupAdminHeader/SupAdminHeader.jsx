import React from 'react'
import DashboardHeader from '../../sharedComponents/DashboardHeader'

export default function SupAdminHeader() {
  return (
    <DashboardHeader title='Super Admin Dashboard' titleRoute='/superAdmin' profileName='Super Admin' profileRoute='/superAdmin/profile'/>
  )
}
