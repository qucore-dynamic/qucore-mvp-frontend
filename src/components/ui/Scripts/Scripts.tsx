// Styles
import './Scripts.scss'

// Config
import { scripts } from '@config/scripts'

const Scripts = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='Scripts bg-(--bl) border-r border-(--border) min-w-27.5 max-w-225 w-[29.25vw] h-screen flex flex-col justify-start items-center overflow-y-auto overflow-x-hidden z-2'>
      <div className='Scripts_content flex flex-col justify-start items-center gap-12.5 py-12.5'>
        {scripts.map((script) => (
          <button
            key={script.title}
            title={script.descr}
            className='Scripts_btn max-w-90 mx-12.5 px-6.25 py-5 self-stretch text-[clamp(0.5rem,1.5vw,1.125rem)] rounded-[20px] shrink-0 text-center cursor-pointer'
          >
            {script.title}
          </button>
        ))}
      </div>

      <footer className='Scripts_footer mt-auto p-12.5 w-full min-w-27.5 max-w-[29.25vw] border-t border-(--border) bg-(--bl) shrink-0 flex justify-center items-center text-center text-[clamp(0.5rem,1.5vw,1rem)] text-(--o-txt)'>
        © {currentYear} QuCore Dynamic. All rights reserved
      </footer>
    </div>
  )
}

export default Scripts
