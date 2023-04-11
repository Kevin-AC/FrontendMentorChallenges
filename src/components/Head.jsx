import Buttons from './Buttons'
function Head () {
  return (
    <section className=' w-full h-[560px] text-White-text  rounded-bl-[84px] bg-gradient-to-b from-Verylightred to-Lightred overflow-hidden'>
      <div className='w-full h-full headImg bg-center bg-no-repeat'>
        <nav className='flex justify-between items-center p-5 pt-14'>
          <img src='src/assets/images/logo.svg' alt='logo' />
          <img src='src/assets/images/icon-hamburger.svg' alt='menu' />
        </nav>
        <div className='text-center flex flex-col gap-6 mt-10 p-6'>
          <h1 className='text-4xl'>A modern publishing platform</h1>
          <p className='px-4'>Grow your audience and build your online brand</p>
        </div>
        <div className='flex justify-center items-center gap-4 pt-16'>
          <Buttons text='Start for Free' />
          <Buttons text='Learn More' />
        </div>
      </div>

    </section>
  )
}
export default Head
