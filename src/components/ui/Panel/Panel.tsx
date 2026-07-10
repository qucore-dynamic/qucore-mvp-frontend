// Styles
import './Panel.scss'

const Panel = () => {
  return (
    <div className='Panel min-w-17.5 bg-(--bl) border border-(--border) rounded-[20px] absolute bottom-[6.65%] px-11.25 py-3.75 flex justify-center items-center gap-10'>
      <button className='Panel_btn cursor-pointer'>
        <img src='images/icons/finances.svg' alt='Finances tab icon' className='Panel_img w-6.25' />
      </button>

      <button className='Panel_btn cursor-pointer'>
        <img src='images/icons/todo.svg' alt='ToDo tab icon' className='Panel_img w-6.25' />
      </button>

      <button className='Panel_btn cursor-pointer'>
        <img
          src='images/icons/inventory.svg'
          alt='Inventory tab icon'
          className='Panel_img w-6.25'
        />
      </button>
    </div>
  )
}

export default Panel
