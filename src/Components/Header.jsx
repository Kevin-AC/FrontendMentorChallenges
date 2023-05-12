import { useState } from 'react'
import { Button } from './Button'

export function Header () {
  const [open, setOpen] = useState(true)
  return (
    <section className=" w-full h-auto px-[7%] mt-10 flex justify-between items-center relative">
      <img src="/images/logo.svg" alt="Logo Web" />
      <div onClick={() => setOpen(!open)} className={`fas text-2xl text-VeryDarkBlue sm:hidden  ${open ? 'fa-bars' : 'fa-times'}`}></div>
      <nav className={`nav ${!open ? 'flex' : 'hidden sm:flex'}`}>
        <ul className="text-VeryDarkBlue font-BarlowCondensed font-bold uppercase text-center flex flex-col sm:flex-row gap-4">
          <li><a href="#">product</a></li>
          <li><a href="#">features</a></li>
          <li><a href="#">pricing</a></li>
        </ul>
        <Button text='Login' style='bg-transparent text-GrayishBlue w-20' />
      </nav>

    </section>
  )
}
