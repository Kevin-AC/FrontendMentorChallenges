import { Header } from './Components/Header'
import { Button } from './Components/Button'

function App () {
  return (
    <main className="w-full h-auto text-lg font-BarlowCondensed">
      <Header />
      <section className="my-10 flex flex-col gap-10 p-4 sm:items-center">
        <img src="/images/illustration-devices.svg" alt="mainIlustration" />
        <div className="flex items-center gap-4 text-xl uppercase font-BarlowCondensed tracking-widest">
          <p className="bg-VeryDarkBlue text-white rounded-full font-semibold px-3 py-1">New</p>
          <p className="font-normal text-DarkGrayishBlue ">Monograph Dashboard</p>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-VeryDarkBlue uppercase text-5xl font-semibold font-BarlowCondensed">Powerful insights into your team</h1>
          <p className="text-xl text-DarkGrayishBlue pr-14 font-Barlow">Project planning and time tracking for agile teams</p>
        </div>
        <div className="flex gap-4">
          <Button text='schedule a demo' style='text-white rounded-lg' />
          <Button text='to see a preview' style='bg-transparent tracking-widest text-DarkGrayishBlue font-normal' />
        </div>
    </section>
    </main>
  )
}

export default App
