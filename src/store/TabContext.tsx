'use client'

// Modules
import { createContext } from 'react'

// Types
import { TabE } from '@shared-types/tabs'

interface TabContextType {
  activeTab: TabE
  setActiveTab: (tab: TabE) => void
}

export const TabContext = createContext<TabContextType | undefined>(undefined)
