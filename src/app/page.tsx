// Components
import Scripts from '@components-ui/Scripts/Scripts'
import Panel from '@components-ui/Panel/Panel'
import Tabs from '@components-pages/home/Tabs'

const Home = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <Scripts />

      <div className='flex-1 bg-(--bg) h-full flex flex-col justify-center items-center relative'>
        <Tabs />
        <Panel />
      </div>
    </div>
  )
}

export default Home
