import React from 'react'
import DashboardProfile from '../../sharedComponents/DashboardProfile'

export default function AdminProfile() {
  return (
    <DashboardProfile backPathRoute='/admin' profiletitle='Admin Profile' profileName='Ali Musa' profileSubTitle='System Administrator' email='info@gmail.com' phone='+92319 1538 407' address='karachi, Pakistan' password='helo@123' role='Admin'/>
  )
}
