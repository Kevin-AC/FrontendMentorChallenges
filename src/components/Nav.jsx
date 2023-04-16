import React, { useState } from 'react'

import Buttons from './Buttons'
function Nav ({ style }) {
  const [toggle, setToggle] = useState({
    M: { toggleState: true },
    P: { toggleState: true },
    CP: { toggleState: true },
    CT: { toggleState: true }
  })
  const handleToggle = (id) => {
    setToggle({
      ...toggle,
      [id]: { ...toggle[id], toggleState: !toggle[id].toggleState }
    })
    console.log(toggle[id])
  }
  return (
    <section className='w-full absolute px-4 pt-16 xl:w-4/5  '>
      <nav className='w-full h-8 flex  justify-between items-center  '>
        <section className='flex justify-between items-center w-full xl:w-auto '>
          <img src='/assets/images/logo.svg' alt='logo' />
          <div className='xl:hidden' onClick={() => handleToggle('M')}>
            <aside className={`cursor-pointer ${toggle.M.toggleState ? 'block' : 'hidden'}`}>
              <img src='/assets/images/icon-hamburger.svg' />
            </aside>
            <aside className={`cursor-pointer ${!toggle.M.toggleState ? 'block' : 'hidden'}`}>
              <img src='/assets/images/icon-close.svg' />
            </aside>
          </div>
        </section>
        <section className={`menu p-4 xl:p-0  ${!toggle.M.toggleState ? '' : 'hidden xl:flex xl:top-14'}`}>
          <ul className='w-full xl:w-auto h-auto  flex flex-col xl:flex-row items-center gap-8 xl:gap-4 font-Ubuntu '>
            <li className='menu__container '>
              <a
                className='menuIten'
                href='#'
                onClick={() => handleToggle('P')}
              >
                <span>Product</span>
                <span className={`w-[14px] h-2 bg-arrowD xl:bg-arrowL bg-cover bg-no-repeat 
                      ${!toggle.P.toggleState ? 'rotate-180' : ''}`}
                />
              </a>
              <div className={`menuIten__container  ${toggle.P.toggleState ? 'hidden' : ''}`}>
                <ul className=' flex flex-col gap-3 p-5'>
                  <li className='menuIten__li '>Overview</li>
                  <li className='menuIten__li'>Pricing</li>
                  <li className='menuIten__li'>Marketplace</li>
                  <li className='menuIten__li'>Features</li>
                  <li className='menuIten__li'>Integrations</li>
                </ul>
              </div>

            </li>
            <li className='menu__container '>
              <a
                className='menuIten flex gap-2 items-center justify-center'
                href='#'
                onClick={() => handleToggle('CP')}
              >
                <span>Company</span>
                <span className={`w-[14px] h-2 bg-arrowD xl:bg-arrowL bg-cover bg-no-repeat 
                      ${!toggle.CP.toggleState ? 'rotate-180' : ''}`}
                />
              </a>
              <div className={`menuIten__container ${toggle.CP.toggleState ? 'hidden' : ''}`}>
                <ul className=' flex flex-col gap-3 p-5'>
                  <li className='menuIten__li'>About</li>
                  <li className='menuIten__li'>Team</li>
                  <li className='menuIten__li'>Blog</li>
                  <li className='menuIten__li'>Careers</li>
                </ul>
              </div>

            </li>
            <li className='menu__container  '>
              <a
                className='menuIten flex gap-2 items-center justify-center'
                href='#'
                onClick={() => handleToggle('CT')}
              >
                <span>Contact</span>
                <span className={`w-[14px] h-2 bg-arrowD xl:bg-arrowL bg-cover bg-no-repeat 
                      ${!toggle.CT.toggleState ? 'rotate-180' : ''}`}
                />
              </a>
              <div className={`menuIten__container ${toggle.CT.toggleState ? 'hidden' : ''}`}>
                <ul className=' flex flex-col gap-3 p-5'>
                  <li className='menuIten__li'>Contact</li>
                  <li className='menuIten__li'>Newsletter</li>
                  <li className='menuIten__li'>Linkedin</li>
                </ul>
              </div>

            </li>
          </ul>
          <div className='w-full xl:w-auto mt-4 xl:mt-0 font-bold text-lg flex flex-col xl:flex-row gap-5 items-center pt-5 xl:pt-0 border-t xl:border-none text-Verydarkgrayishblue(bodycopy) '>
            <a className='xl:text-White-text ' href='#'>Login</a>
            <Buttons
              text='Sign Up'
              style='text-White-text bg-gradient-to-r from-Verylightred to-Lightred border-none
                     xl:bg-gradient-to-r from-White-text to-White-text xl:text-Lightred'
            />
          </div>
        </section>

      </nav>
    </section>
  )
}
export default Nav
