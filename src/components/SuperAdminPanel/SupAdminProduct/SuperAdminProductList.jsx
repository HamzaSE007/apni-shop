import React from 'react'
import DashboardProductList from '../../sharedComponents/DashboardProductList'
import { useGetAllProductsQuery } from '../../../services/products.api'

export default function SuperAdminProductList() {
    const {data, isLoading, isError, error} = useGetAllProductsQuery()
  return (
    <DashboardProductList title='SuperAdmin Product List' data={data} isLoading={isLoading} isError={isError} error={error} detailPageRoute='/superAdmin/productDetail'/>
  )
}
