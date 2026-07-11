'use client'

// Modules
import { useContext } from 'react'

// Types
import { TabContext } from '@store/TabContext'

export const useTabs = () => {
  const context = useContext(TabContext)

  if (!context) {
    throw new Error(`useTabs must be used within a TabProvider`)
  }

  return context
}
