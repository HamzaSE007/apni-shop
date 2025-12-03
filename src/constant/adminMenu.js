import { AiOutlineProduct } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { CiBoxList, CiShop, CiCircleList } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { FiUsers, FiShoppingBag } from "react-icons/fi";

export const adminMenu = [
  {
    label: "Products",
    icon: AiOutlineProduct,
    children: [
      {
        label: "Product List",
        to: "product-list",
        icon: BsBoxSeam 
      },
      {
        label: "Categories",
        to: "product-category-list",
        icon: CiBoxList 
      }
    ]
  },

  {
    label: "Orders",
    to: "orders",
    icon: FiShoppingBag 
  },

  {
    label: "Customers",
    to: "customers",
    icon: FiUsers
  },

  {
    label: "Vendor",
    icon: CiShop,
    children: [
      {
        label: "Vendor List",
        to: "vendors-list",
        icon: CiCircleList
      },
      {
        label: "Create Vendor",
        to: "vendor-creation",
        icon: IoCreateOutline
      }
    ]
  }
];