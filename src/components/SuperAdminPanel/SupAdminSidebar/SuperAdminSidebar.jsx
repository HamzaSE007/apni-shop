import React from 'react'
import DashboardSidebar from '../../sharedComponents/DashboardSidebar'
import { superAdminMenu } from '../../../constant/superAdminMenu'

export default function SuperAdminSidebar() {
  return (
    <DashboardSidebar menu={superAdminMenu}/>
  )
}
