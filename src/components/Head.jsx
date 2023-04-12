import Buttons from './Buttons'
import Nav from './Nav'
function Head () {
  return (
    <section className=' pt-10 w-full h-[560px] text-White-text  rounded-bl-[84px] bg-gradient-to-b from-Verylightred to-Lightred '>
      <Nav />
      <div className='w-full h-auto overflow-hidden'>
        <div className='w-full h-full headImg bg-center bg-no-repeat'>
          <div className='text-center flex flex-col gap-6 mt-10 p-6'>
            <h1 className='text-4xl'>A modern publishing platform</h1>
            <p className='px-4'>Grow your audience and build your online brand</p>
          </div>
          <div className='flex justify-center items-center gap-4 pt-16'>
            <Buttons text='Start for Free' />
            <Buttons text='Learn More' />
          </div>
        </div>
      </div>

    </section>
  )
}
export default Head
