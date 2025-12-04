import React from 'react'
import DashboardOrderList from '../../sharedComponents/DashboardOrderList'
import { ordersList } from '../../../constant/ordersList'

export default function SuperAdminOrderList() {
    
  return (
    <DashboardOrderList title='Order List' orders={ordersList}/>
  )
}
