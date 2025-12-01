import {
  FiBox,
  FiLayers,
  FiShoppingBag,
} from "react-icons/fi";


export const vendorDashboardStats = {
  products: {
    title: "Products",
    total: 133,
    active: 110,
    inactive: 15,
    lowStock: 8,
    icon: FiBox,
  },

  categories: {
    title: "Categories",
    total: 12,
    active: 10,
    inactive: 2,
    lowStock: 0,
    icon: FiLayers,
  },

  orders: {
    title: "Orders",
    total: 560,
    active: 430,     
    inactive: 95,    
    lowStock: 35,  
    icon: FiShoppingBag,   
  }
}