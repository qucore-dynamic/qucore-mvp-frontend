'use client'

// Components
// import ToDo from './tabs/ToDo/ToDo'
// import Finances from './tabs/Finances/Finances'
// import Inventory from './tabs/Inventory/Inventory'

// Hooks
import { useTabs } from '@hooks/useTabs'

const Tabs = () => {
  const { activeTab } = useTabs()

  return <div>{activeTab}</div>
}

export default Tabs
