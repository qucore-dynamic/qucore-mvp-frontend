'use client'

// Modules
import { useState } from 'react'

// Types
import { LayoutT } from '@shared-types/layouts'
import { TabE } from '@shared-types/tabs'

// Store
import { TabContext } from '@store/TabContext'

export const TabProvider = ({ children }: LayoutT) => {
  const [activeTab, setActiveTab] = useState(TabE.finances)

  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>
}
