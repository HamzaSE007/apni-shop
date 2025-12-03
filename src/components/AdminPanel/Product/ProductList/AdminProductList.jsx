import React from 'react'
import DashboardProductList from '../../../sharedComponents/DashboardProductList'
import { useGetAllProductsQuery } from '../../../../services/products.api'

export default function AdminProductList() {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  return (
    <DashboardProductList title='Admin Product List' data={data} isLoading={isLoading} isError={isError} error={error} detailPageRoute='/admin/productDetail'/>
  )
}
