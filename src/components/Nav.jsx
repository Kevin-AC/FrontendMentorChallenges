import React, { useState } from 'react'

import Buttons from './Buttons'
function Nav () {
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
    <header className='p-4 relative'>
      <nav className='flex justify-between items-center w-full'>
        <section className='flex justify-between items-center w-full'>
          <img src='/assets/images/logo.svg' alt='logo' />
          <div onClick={() => handleToggle('M')}>
            <aside className={`cursor-pointer ${toggle.M.toggleState ? 'block' : 'hidden'}`}>
              <img src='/assets/images/icon-hamburger.svg' />
            </aside>
            <aside className={`cursor-pointer ${!toggle.M.toggleState ? 'block' : 'hidden'}`}>
              <img src='/assets/images/icon-close.svg' />
            </aside>
          </div>
        </section>
        <section className={`menu p-4 py-8 ${!toggle.M.toggleState ? '' : 'hidden'}`}>
          <ul className=' w-full h-auto flex flex-col items-center gap-8 font-Ubuntu'>
            <li className='menu__container '>
              <a
                className='menuIten '
                href='#'
                onClick={() => handleToggle('P')}
              >
                <span>Product</span>
                <img src='/assets/images/icon-arrow-dark.svg' />
              </a>
              <div className={`menuIten__container ${toggle.P.toggleState ? 'hidden' : ''}`}>
                <ul className=' flex flex-col gap-3 p-5'>
                  <li className='menuIten__li'>Contact</li>
                  <li className='menuIten__li'>Newsletter</li>
                  <li className='menuIten__li'>Linkedin</li>
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
                <img src='/assets/images/icon-arrow-dark.svg' />
              </a>
              <div className={`menuIten__container ${toggle.CP.toggleState ? 'hidden' : ''}`}>
                <ul className=' flex flex-col gap-3 p-5'>
                  <li className='menuIten__li'>Contact</li>
                  <li className='menuIten__li'>Newsletter</li>
                  <li className='menuIten__li'>Linkedin</li>
                </ul>
              </div>

            </li>
            <li className='menu__container '>
              <a
                className='menuIten flex gap-2 items-center justify-center'
                href='#'
                onClick={() => handleToggle('CT')}
              >
                <span>Contact</span>
                <img src='/assets/images/icon-arrow-dark.svg' />
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
          <div className='w-full mt-5 font-medium flex flex-col gap-5 items-center pt-5 border-t text-Verydarkgrayishblue(bodycopy) '>
            <a href='#'>Login</a>
            <Buttons text='Sign Up' />
          </div>
        </section>

      </nav>
    </header>
  )
}
export default Nav
