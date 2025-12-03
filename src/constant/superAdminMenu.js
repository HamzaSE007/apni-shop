import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";

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
]