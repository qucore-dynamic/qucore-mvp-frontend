// Components
import Scripts from '@components-ui/Scripts/Scripts'
import Panel from '@components-ui/Panel/Panel'
import Tabs from '@components-pages/home/Tabs'
import FadeUpMotion from '@components/shared/FadeUpMotion'

const Home = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <FadeUpMotion delay={0} x={-100} y={0}>
        <Scripts />
      </FadeUpMotion>

      <div className='flex-1 bg-(--bg) flex flex-col justify-center items-center relative px-[3.3%] overflow-y-auto overflow-x-hidden'>
        <Tabs />
        <Panel />
      </div>
    </div>
  )
}

export default Home
