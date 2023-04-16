import Buttons from './Buttons'
import Nav from './Nav'
function Head () {
  return (
    <header className='w-full h-[560px] mb-28 text-White-text rounded-bl-[84px] bg-gradient-to-b from-Verylightred to-Lightred overflow-hidden flex justify-center'>
      <Nav />
      <div className='w-full h-full bg-headImg xl:bg-deskHeadImg bg-center bg-no-repeat'>
        <div
          data-aos='fade-up'
          data-aos-duration='1700'
          className='text-center flex flex-col gap-6 pt-40 px-6'
        >
          <h1 className='text-4xl xl:text-5xl font-bold'>A modern publishing platform</h1>
          <p className='px-4 text-lg'>Grow your audience and build your online brand</p>
        </div>
        <div className='flex justify-center items-center gap-4 pt-16  '>
          <Buttons
            text='Start for Free'
            style='text-Lightred bg-White-text xl:hover:text-White-text xl:hover:border-none xl:hover:bg-Verylightred(CTAhoverbackground)'
          />
          <Buttons
            text='Learn More'
            style='xl:hover:bg-White-text xl:hover:text-Lightred'
          />
        </div>
      </div>
    </header>
  )
}
export default Head
