import { Header } from './Components/Header'
import { Button } from './Components/Button'

function App () {
  return (
    <main className="w-full h-auto text-lg font-BarlowCondensed">
      <Header />
      <section className="w-auto h-auto my-10 flex flex-col sm:flex-row gap-10 px-[7%] sm:items-center overflow-hidden">
        <img className='lg:order-1 -mr-72' width={800} src="/images/illustration-devices.svg" alt="mainIlustration" />
        <article className='w-[500px] flex flex-col gap-4 lg:gap-5'>
          <div className="flex items-center gap-4 text-xl uppercase font-BarlowCondensed tracking-widest">
            <p className="bg-VeryDarkBlue text-white text-center rounded-full font-semibold px-3 py-1">New</p>
            <p className="font-normal text-DarkGrayishBlue ">Monograph Dashboard</p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8 ">
            <h1 className="text-VeryDarkBlue uppercase text-4xl lg:text-5xl font-semibold font-BarlowCondensed lg:pr-20">Powerful insights into your team</h1>
            <p className="text-xl text-DarkGrayishBlue pr-14 font-Barlow lg:pr-44">Project planning and time tracking for agile teams</p>
          </div>
          <div className="flex gap-4">
            <Button text='schedule a demo' style='text-white rounded-lg hover:bg-Red/80' />
            <Button text='to see a preview' style='bg-transparent tracking-widest text-DarkGrayishBlue font-normal' />
          </div>
        </article>
    </section>
    </main>
  )
}

export default App
