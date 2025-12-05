import { RiDashboardFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";

export const customerDashboardMenu = [
    {
        label: 'Overview',
        icon: RiDashboardFill,
        to: 'overview'
    },
    {
        label: 'My Orders',
        icon: FaBagShopping,
        to: 'my-orders'
    }
]