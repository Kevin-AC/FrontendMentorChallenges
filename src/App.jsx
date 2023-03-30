import React, { useEffect, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Footer from './components/Footer'
function App () {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData () {
      const response = await fetch('/data.json')
      const jdata = await response.json()
      setData(jdata)
    }
    fetchData()
  }, [])
  const result = Math.round(data.reduce((a, c) => a + c.score, 0) / 4)

  return (
    <div className='w-full h-auto grid place-content-center xl:min-h-screen gap-3'>
      <main className=' xl:flex bg-white xl:rounded-3xl xl:shadow-2xl '>
        <section className='w-full h-auto  xl:w-[370px] xl:h-[500px] flex flex-col items-center gap-5 xl:gap-7 py-10 px-14 xl:px-22 rounded-b-3xl xl:rounded-3xl bg-gradient-to-b from-Lightslateblue_background to-Lightroyalblue_background'>
          <h1 className='text-xl xl:text-2xl text-Lightlavender'>Your Result</h1>
          <div className='w-32 h-32 xl:w-48 xl:h-48 rounded-full flex flex-col items-center justify-center  bg-gradient-to-b from-Violetblue_circle to-Persianblue_circle'>
            <p className='text-white text-5xl xl:text-7xl font-extrabold'>{result}</p>
            <span className='text-base text-Lightlavender'>of 100</span>
          </div>
          <p className='text-2xl xl:text-4xl font-bold text-White'>Great</p>
          <p className='text-center text-Lightlavender text-lg '>You scored higher than 65% of the people who have taken these tests.</p>
        </section>
        <section className='p-4 xl:px-11 flex flex-col gap-4 xl:gap-6 xl:pt-7 xl:w-[370px]  '>
          <h2 className='text-Darkgrayblue text-lg xl:text-2xl font-bold '>Summary</h2>
          {data.map((item, index) => (
            <Card
              key={index}
              imgSrc={item.icon}
              tipe={item.category}
              score={item.score}
            />
          ))}
          <Button />
        </section>
      </main>
      <Footer />
    </div>

  )
}

export default App
