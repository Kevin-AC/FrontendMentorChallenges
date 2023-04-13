import Buttons from './Buttons'
import Nav from './Nav'
function Head () {
  return (
    <header className='w-full h-[560px] text-White-text rounded-bl-[84px] bg-gradient-to-b from-Verylightred to-Lightred overflow-hidden flex justify-center'>
      <Nav />
      <div className='w-full h-full headImg bg-center bg-no-repeat'>
        <div className='text-center flex flex-col gap-6 pt-40 px-4'>
          <h1 className='text-4xl xl:text-5xl'>A modern publishing platform</h1>
          <p className='px-4 xl:text-lg'>Grow your audience and build your online brand</p>
        </div>
        <div className='flex justify-center items-center gap-4 pt-16 '>
          <Buttons
            text='Start for Free'
            style='text-Lightred bg-White-text'
          />
          <Buttons
            text='Learn More'
          />
        </div>
      </div>
    </header>
  )
}
export default Head
