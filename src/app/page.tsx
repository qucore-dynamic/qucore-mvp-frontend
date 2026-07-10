// Components
import Scripts from '@components-ui/Scripts/Scripts'
import Panel from '@components-ui/Panel/Panel'
import Tabs from '@components-pages/home/Tabs'

const Home = () => {
  return (
    <>
      <Scripts />

      <div className='bg-(--bg) w-[75vw] h-screen flex flex-col justify-center items-center relative'>
        <Tabs />
        <Panel />
      </div>
    </>
  )
}

export default Home
