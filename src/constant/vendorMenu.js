import { AiOutlineProduct } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { RiApps2AddLine } from "react-icons/ri";

export const vendorMenu = [
    {
      label: "Products",
      icon: AiOutlineProduct ,
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
      label: "Add Product",
      to: "add-new-product",
      icon: RiApps2AddLine
    }
  ];