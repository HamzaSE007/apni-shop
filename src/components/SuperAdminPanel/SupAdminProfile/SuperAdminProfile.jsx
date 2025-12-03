import React from 'react'
import DashboardProfile from '../../sharedComponents/DashboardProfile'

export default function SuperAdminProfile() {
  return (
    <DashboardProfile backPathRoute='/superAdmin' profiletitle='Super Admin Profile' profileName='Muhammad Hamza' profileSubTitle='System Administrator' email='hamza@gmail.com' phone='+92319 1538 407' address='Lahore, Pakistan' password='admin@1122' role='Super Admin'/>
  )
}
