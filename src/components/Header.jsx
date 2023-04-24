import { useState } from 'react'
import Buttons from './Buttons'
import Nav from './Nav'
function Header () {
  const [menu, setMenu] = useState(true)
  return (
    <header className="headerImg  w-full h-[630px] rounded-bl-[120px] overflow-hidden">
        <section className='xl:flex items-start justify-center gap-9 pt-10'>
          <div className="flex justify-between items-center p-4 xl:p-0 ">
            <img src="/images/logo.svg" alt="logo" />
            <span className='xl:hidden' onClick={() => setMenu(!menu)} >
              {menu && <img src="/images/icon-hamburger.svg" alt="menu" />}
              {!menu && <img src="/images/icon-close.svg" alt="menu" />}
            </span>
          </div>
          {!menu && <Nav />}
          <div className='max-[470px]:hidden '>
            <Nav />
          </div>
        </section>
        <section className='text-center mt-20 text-White-text'>
          <div className='px-4'>
            <h1 className='text-4xl xl:text-6xl font-medium mb-8'>A modern publishing platform</h1>
            <p className='px-4 text-lg'>Grow your audience and build your online brand</p>
          </div>
          <div className='flex justify-center items-center gap-4 xl:gap-9 pt-16  '>
            <Buttons title='Start for Free' style='text-Lightred hover:text-White-text bg-White-text hover:bg-Verylightred(CTAhoverbackground)' />
            <Buttons title='Learn More' style='text-White-text hover:text-Lightred(CTAtext) border hover:bg-White-text' />
          </div>
        </section>
    </header>
  )
}
export default Header
