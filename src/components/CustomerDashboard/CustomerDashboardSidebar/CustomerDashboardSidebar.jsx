import { customerDashboardMenu } from '../../../constant/customerDashboardMenu'
import DashboardSidebar from '../../sharedComponents/DashboardSidebar'

export default function CustomerDashboardSidebar() {
  return (
    <DashboardSidebar menu={customerDashboardMenu}/>
  )
}
