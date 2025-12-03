import { adminMenu } from "../../../constant/adminMenu";
import DashboardSidebar from "../../sharedComponents/DashboardSidebar";

export default function AdminSidebar() {
  
  return (
    <DashboardSidebar menu={adminMenu}/>
  );
}
