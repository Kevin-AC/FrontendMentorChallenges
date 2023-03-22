import React from 'react'
import Card from './components/Card'
import Footer from './components/Footer'
function App () {
  const [toggle, setToggle] = React.useState(true)

  return (
    <main className='w-full bg-VeryLightGrayishBlue grid place-content-center min-h-screen relative overflow-hidden'>
      <img
        src='/images/bg-top.svg'
        className='absolute -top-11 -right-44 z-0 xl:-right-0'
        alt=''
      />
      <img
        src='/images/bg-bottom.svg'
        className='absolute bottom-0 left-0 z-0 xl:-right-0'
        alt=''
      />
      <div className='w-full h-auto mt-10 p-2 z-10 text-center flex flex-col justify-center items-center gap-9 '>
        <h1 className='text-4xl text-GrayishBlue font-bold'>Our Pricing</h1>
        <label
          htmlFor='switch'
          className='relative cursor-pointer inline-flex items-center gap-4'
        >
          <span className='text-LightGrayishBlue'>Annually</span>
          <input
            id='switch'
            type='checkbox'
            aria-label='toggle'
            className='sr-only peer '
            onClick={() => setToggle(!toggle)}
          />
          <span className='toggle hover:opacity-50' />
          <span className='text-LightGrayishBlue'>Monthly</span>
        </label>

        <div className='flex flex-col xl:flex-row gap-4 xl:gap-1 xl:items-center'>
          <Card
            price={toggle ? 199.99 : 19.99}
            plan='Basic'
            storage='500 GB'
            users='2'
            send='3'
          />
          <Card
            price={toggle ? 249.99 : 24.99}
            plan='Professional'
            storage='1 TB'
            users='5'
            send='10'
          />
          <Card
            price={toggle ? 399.99 : 39.99}
            plan='Master'
            storage='2 TB'
            users='10'
            send='20'
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}
export default App
