'use client'

// Styles
import './Inventory.scss'

// Components
import Cloud from '@components-ui/Cloud/Cloud'
import FadeUpMotion from '@components/shared/FadeUpMotion'

const InventoryClient = () => {
  const broken = 5
  const itemMn = '- 1'
  const itemPl = '+ 1'

  return (
    <div className='w-full h-full flex justify-center items-start text-center'>
      <Cloud fileName='inventory.svg' className='left-0 top-[50vh]' />

      <div className='w-full flex flex-col justify-center items-center gap-18.75 z-1'>
        <FadeUpMotion
          delay={0}
          x={-75}
          y={0}
          className='Inventory_header w-full max-w-342.5 min-h-62.5 bg-(--bl) flex justify-center items-center border-2 border-t-0 border-(--border) rounded-b-[20px] p-12.5'
        >
          <div className='Inventory_header-content flex flex-wrap justify-center items-center gap-50'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-prosto text-[clamp(1rem,3.25vw,3rem)]'>500 items</h1>

              <h3 className='font-afacad text-[clamp(0.875rem,3.25vw,2rem)]'>current stocks</h3>
            </div>

            <div
              className={`${broken > 0 ? 'text-red-500' : ''} flex flex-col justify-center items-center`}
            >
              <h2 className='font-prosto text-[clamp(0.75rem,3.25vw,2rem)]'>{broken} items</h2>

              <h3 className='font-afacad text-[clamp(0.7rem,3.25vw,1.5rem)]'>broken down</h3>
            </div>
          </div>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0}
          x={75}
          y={0}
          className='Inventory_cards mb-37.5 flex flex-col justify-center items-center gap-12.5'
        >
          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Inventory_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${itemMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 5 items
            </h3>

            <h4
              title='The name of some item that had broken. The name of some item that had broken'
              className='Inventory_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              The name of some item that had broken. The name of some item that had broken
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>
        </FadeUpMotion>
      </div>
    </div>
  )
}

export default InventoryClient
