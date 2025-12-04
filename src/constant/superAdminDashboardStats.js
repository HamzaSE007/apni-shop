import {
  FiUsers,
  FiUserCheck,
  FiShoppingBag,
  FiBox,
  FiLayers,
} from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const superAdminDashboardStats = {
  admins: {
    title: "Admins",
    total: 12,
    active: 10,
    inactive: 2,
    lowStock: 0,       // not applicable but added for structure consistency
    icon: MdOutlineAdminPanelSettings,
  },

  vendors: {
    title: "Vendors",
    total: 85,
    active: 70,
    inactive: 12,
    lowStock: 3,       // low performing vendors (optional meaning)
    icon: FiUserCheck,
  },

  customers: {
    title: "Customers",
    total: 4200,
    active: 3500,
    inactive: 600,
    lowStock: 100,     // low engagement customers (optional)
    icon: FiUsers,
  },

  products: {
    title: "Products",
    total: 1600,
    active: 1450,
    inactive: 100,
    lowStock: 50,
    icon: FiBox,
  },

  categories: {
    title: "Categories",
    total: 25,
    active: 22,
    inactive: 3,
    lowStock: 0,
    icon: FiLayers,
  },

  orders: {
    title: "Orders",
    total: 9200,
    active: 8200,     // ongoing / completed
    inactive: 500,     // cancelled / returned
    lowStock: 500,   // pending / on-hold
    icon: FiShoppingBag,
  },
};
