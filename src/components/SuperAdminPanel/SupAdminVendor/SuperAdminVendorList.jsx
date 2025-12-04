import React from 'react'
import DashboardVendorList from '../../sharedComponents/DashboardVendorList'
import { vendorsInfo } from '../../../constant/vendorsInfo'

export default function SuperAdminVendorList() {
  return (
    <DashboardVendorList title='Vendor List' vendors={vendorsInfo}/>
  )
}
