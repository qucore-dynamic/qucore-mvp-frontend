'use client'

// Styles
import './Finances.scss'

// Components
import Cloud from '@components-ui/Cloud/Cloud'
import FadeUpMotion from '@components/shared/FadeUpMotion'

const FinancesClient = () => {
  const diff = '+ 5 000'
  const oppMn = '+ 7 500'
  const oppPl = '- 7 500'

  return (
    <div className='w-full h-full flex justify-center items-start text-center'>
      <Cloud fileName='finances.svg' className='right-0 top-[3.3%]' />

      <div className='w-full flex flex-col justify-center items-center gap-18.75 z-1'>
        <FadeUpMotion
          delay={0}
          x={-75}
          y={0}
          className='Finances_header w-full max-w-342.5 min-h-62.5 bg-(--bl) flex justify-center items-center border-2 border-t-0 border-(--border) rounded-b-[20px] p-12.5'
        >
          <div className='Finances_header-content flex flex-wrap justify-center items-center gap-50'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='font-prosto text-[clamp(0.75rem,3.25vw,2rem)]'>45 000 $</h2>

              <h3 className='font-afacad text-[clamp(0.7rem,3.25vw,1.5rem)]'>last month</h3>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-prosto text-[clamp(1rem,3.25vw,3rem)]'>50 000 $</h1>

              <h3 className='font-afacad text-[clamp(0.875rem,3.25vw,2rem)]'>current balance</h3>
            </div>

            <div
              className={`${diff.trim().startsWith('-') || diff.trim().startsWith('0') ? 'text-red-500' : 'text-green-500'} flex flex-col justify-center items-center`}
            >
              <h2 className='font-prosto text-[clamp(0.75rem,3.25vw,2rem)]'>{diff} $</h2>

              <h3 className='font-afacad text-[clamp(0.7rem,3.25vw,1.5rem)]'>difference</h3>
            </div>
          </div>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0}
          x={75}
          y={0}
          className='Finances_cards mb-37.5 flex flex-col justify-center items-center gap-12.5'
        >
          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppMn.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              - 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>

          <div className='Finances_card bg-(--bl) border-2 border-(--border) rounded-[20px] flex flex-wrap justify-center items-center px-18.75 py-6.25 gap-12.5'>
            <h3
              className={`${oppPl.trim().startsWith('-') ? 'text-red-500' : 'text-green-500'} font-prosto text-[clamp(1rem,2.5vw,2.25rem)]`}
            >
              + 7 500 $
            </h3>

            <h4
              title='Some message of the finance operation. Some message of the finance operation'
              className='Finances_card-text w-full max-w-112.5 truncate font-afacad text-[clamp(0.75rem,2.5vw,1.25rem)]'
            >
              Some message of the finance operation. Some message of the finance operation
            </h4>

            <p className='font-coda text-[clamp(0.6rem,1.25vw,1rem)] text-(--o-txt)'>07.07.2026</p>
          </div>
        </FadeUpMotion>
      </div>
    </div>
  )
}

export default FinancesClient
