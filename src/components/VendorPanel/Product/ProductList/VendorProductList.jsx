import { useGetAllProductsQuery } from "../../../../services/products.api";
import DashboardProductList from "../../../sharedComponents/DashboardProductList";

export default function VendorProductList() {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  return (
    <DashboardProductList title='Vendor Product List' data={data} isLoading={isLoading} isError={isError} error={error} detailPageRoute='/vendor/productDetail'/>
  );
}
