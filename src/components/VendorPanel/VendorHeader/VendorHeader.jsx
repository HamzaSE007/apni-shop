import React from 'react'
import DashboardHeader from '../../sharedComponents/DashboardHeader'

export default function VendorHeader() {
  return (
    <DashboardHeader title='Vendor Dashboard' titleRoute='/vendor' profileName='Vendor' profileRoute='/vendor/profile' isActive={true}/>
  )
}
