import {
  FiBox,
  FiLayers,
  FiShoppingBag,
  FiUsers,
  FiUserCheck
} from "react-icons/fi";


export const dashboardStats = {
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
  },

  customers: {
    title: "Customers",
    total: 2400,
    active: 2200,     
    inactive: 200,    
    lowStock: 0,   
    icon: FiUsers,   
  },

  vendors: {
    title: "Vendor List",
    total: 25,
    active: 20,
    inactive: 5,
    lowStock: 0,
    icon: FiUserCheck,
  },
};
