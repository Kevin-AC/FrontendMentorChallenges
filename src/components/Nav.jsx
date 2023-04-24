import { useState, useRef } from 'react'
import Buttons from './Buttons'

function Nav () {
  const [open, setOpen] = useState(null)

  const menuRef = useRef(null)
  const handleMenuClick = (menu) => {
    if (open === menu) {
      setOpen(null)
    } else {
      setOpen(menu)
    }
  }

  return (
    <nav className="navStyle h-auto w-11/12 px-4 mt-4 xl:mt-0 xl:p-0 flex flex-col xl:flex-row justify-between items-center absolute left-0 right-0 xl:relative   ">
      <ul className="flex flex-col xl:flex-row gap-6 xl:gap-14 my-5 xl:m-0  xl:pr-96 w-full">
        <li onClick={() => handleMenuClick('menu1')} className="menuCat ">
          <div className='menuCatP'>
            <p>Product</p>
            <picture className={`${open === 'menu1' ? 'rotate-180' : ''}`}>
              <source media='(max-width: 465px)' srcSet='/images/icon-arrow-dark.svg' />
              <img src='/images/icon-arrow-light.svg'/>
            </picture>
         </div>
          {open === 'menu1' && <ul ref={menuRef} className='menuUl'>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>}
        </li>
        <li onClick={() => handleMenuClick('menu2')} className="menuCat ">
          <div className='menuCatP'>
            <p>Company</p>
            <picture className={`${open === 'menu2' ? 'rotate-180' : ''}`}>
              <source media='(max-width: 465px)' srcSet='/images/icon-arrow-dark.svg' />
              <img src='/images/icon-arrow-light.svg' />
            </picture>
          </div>
          {open === 'menu2' && <ul className='menuUl'>
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>}
        </li>
        <li onClick={() => handleMenuClick('menu3')} className="menuCat">
          <div className='menuCatP'>
            <p>Connect</p>
            <picture className={`${open === 'menu3' ? 'rotate-180' : ''}`}>
              <source media='(max-width: 465px)' srcSet='/images/icon-arrow-dark.svg' />
              <img src='/images/icon-arrow-light.svg' />
            </picture>
          </div>
          {open === 'menu3' && <ul className='menuUl'>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>}
        </li>
      </ul>
     <div className='flex flex-col xl:flex-row items-center gap-2  mt-2 mb-7 xl:m-0 border-t xl:border-none w-full xl:w-auto'>
        <Buttons title='Login' style='font-medium xl:text-white ' />
        <Buttons title='Sign Up'
          style='border-none text-White-text bg-Verylightred xl:bg-white xl:text-Lightred hover:bg-Verylightred(CTAhoverbackground) hover:text-White-text ' />
     </div>
    </nav>
  )
}
export default Nav
