import React from 'react'
import DashboardOrderList from '../../sharedComponents/DashboardOrderList'
import { ordersList } from '../../../constant/ordersList'

export default function Orders() {
  const orders = ordersList;
  return (
    <DashboardOrderList title='Admin Order List' orders={orders}/>
  )
}
