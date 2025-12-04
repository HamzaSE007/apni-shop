import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CiBoxList, CiCircleList, CiShop } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { FiUsers, FiShoppingBag } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";

export const superAdminMenu = [
    {
        label: 'Admin',
        icon: MdOutlineAdminPanelSettings,
        children: [
            {
                label: 'Admin List',
                icon: CiCircleList,
                to: 'admin-list'
            },
            {
                label: 'Create Admin',
                icon: IoCreateOutline,
                to: 'create-admin'
            }
        ]
    },
    {
        label: 'Vendor',
        icon: CiShop,
        children: [
            {
                label: 'Vendor List',
                icon: CiCircleList,
                to: 'vendor-list'
            },
            {
                label: 'Create Vendor',
                icon: IoCreateOutline,
                to: 'create-vendor'
            }
        ]
    },
    {
        label: 'Order',
        icon: FiShoppingBag,
        to: 'orders'
    },
    {
        label: 'Product',
        icon: BsBoxSeam,
        children: [
            {
                label: 'Product List',
                icon: CiBoxList,
                to: 'product-list'
            },
            {
                label: 'Category List',
                icon: CiBoxList,
                to: 'product-category-list'
            },
        ]
    },
    {
        label: 'Customers',
        icon: FiUsers,
        to: 'customer-list'
    }
]