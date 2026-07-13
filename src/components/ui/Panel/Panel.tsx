'use client'

// Styles
import './Panel.scss'

// Components
import FadeUpMotion from '@components/shared/FadeUpMotion'

// Hooks
import { useTabs } from '@hooks/useTabs'

// Types
import { TabE } from '@shared-types/tabs'

const Panel = () => {
  const { activeTab, setActiveTab } = useTabs()

  return (
    <FadeUpMotion
      delay={0}
      x={0}
      y={100}
      className='Panel min-w-17.5 bg-(--bl) border border-(--border) rounded-[20px] fixed bottom-[6.65%] px-11.25 py-3.75 flex justify-center items-center gap-10 z-2'
    >
      <button
        title='Finances tab'
        onClick={() => setActiveTab(TabE.finances)}
        className='Panel_btn relative cursor-pointer'
      >
        <img
          src='images/icons/finances_hov.svg'
          alt='Finances tab icon'
          className={`Panel_img-hov select-none pointer-events-none h-6.25 absolute ${activeTab === TabE.finances ? 'Panel_img-curr' : ''}`}
        />

        <img
          src='images/icons/finances.svg'
          alt='Finances tab icon'
          className='Panel_img h-6.25 select-none pointer-events-none'
        />
      </button>

      <button
        title='ToDo tab'
        onClick={() => setActiveTab(TabE.todo)}
        className='Panel_btn relative cursor-pointer'
      >
        <img
          src='images/icons/todo_hov.svg'
          alt='ToDo tab icon'
          className={`Panel_img-hov select-none pointer-events-none h-6.25 absolute ${activeTab === TabE.todo ? 'Panel_img-curr' : ''}`}
        />

        <img
          src='images/icons/todo.svg'
          alt='ToDo tab icon'
          className='Panel_img h-6.25 select-none pointer-events-none'
        />
      </button>

      <button
        title='Inventory tab'
        onClick={() => setActiveTab(TabE.inventory)}
        className='Panel_btn relative cursor-pointer'
      >
        <img
          src='images/icons/inventory_hov.svg'
          alt='Inventory tab icon'
          className={`Panel_img-hov select-none pointer-events-none h-6.25 absolute ${activeTab === TabE.inventory ? 'Panel_img-curr' : ''}`}
        />

        <img
          src='images/icons/inventory.svg'
          alt='Inventory tab icon'
          className='Panel_img h-6.25 select-none pointer-events-none'
        />
      </button>
    </FadeUpMotion>
  )
}

export default Panel
