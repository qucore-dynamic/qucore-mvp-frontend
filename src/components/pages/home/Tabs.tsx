'use client'

// Components
import ToDo from './tabs/ToDo/page'
import Finances from './tabs/Finances/page'
import Inventory from './tabs/Inventory/page'

// Hooks
import { useTabs } from '@hooks/useTabs'

// Types
import { TabE } from '@shared-types/tabs'

const Tabs = () => {
  const { activeTab } = useTabs()

  switch (activeTab) {
    case TabE.finances:
      return <Finances />

    case TabE.todo:
      return <ToDo />

    case TabE.inventory:
      return <Inventory />

    default:
      return <Finances />
  }
}

export default Tabs
