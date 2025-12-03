import React from 'react'
import DashboardOrderList from '../../sharedComponents/DashboardOrderList'
import { ordersList } from '../../../constant/ordersList'

export default function VendorOrders() {
  const orders = ordersList;
  return (
    <DashboardOrderList title='Vendor Order List' orders={orders}/>
  )
}
