import Card from './components/Card'
import React, { useState } from 'react'
import Footer from './components/Footer'
// import { v4 as uuidv4 } from 'uuid'
function App () {
  const [counter, setCounter] = useState({
    number: 3,
    M: { isRead: true, cliked: false },
    A: { isRead: true, cliked: false },
    J: { isRead: true, cliked: false }

  })

  const handleMark = () => {
    setCounter({
      number: counter.number = 0,
      M: { isRead: false },
      A: { isRead: false },
      J: { isRead: false }
    })
  }
  const handdleClick = (id) => {
    if (counter.number === 0) return
    if (counter[id].cliked) return
    setCounter({
      ...counter,
      [id]: { ...counter[id], isRead: false, cliked: true },
      number: counter.number - 1
    })
  }
  return (
    <main className='bg-Verylightgrayishblue border w-full grid place-content-center min-h-screen '>
      <div className='w-full xl:max-w-[730px] bg-white my-5 rounded-xl p-4 xl:p-8 h-auto flex flex-col gap-4 '>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2  items-center'>
            <h1 className='text-2xl font-extrabold text-Verydarkblue'>Notifications</h1>
            <p className='bg-Blue w-7 h-6 grid place-content-center text-White font-bold rounded-md'>{counter.number}</p>
          </div>
          <button onClick={handleMark} className='border-none outline-none text-Darkgrayishblue font-medium hover:text-Blue'>Mark all as read</button>
        </div>
        <Card
          handdleClick={() => handdleClick('M')}
          image='mark-webber'
          name='Mark Webber'
          text='reacted to your recent post'
          picture={null}
          message=''
          activity='My first tournament today!'
          date='1m ago'
          isRead={counter.M.isRead}
        />
        <Card
          handdleClick={() => handdleClick('A')}
          image='angela-gray'
          name='Angela Gray'
          text='followed you'
          message=''
          picture={null}
          activity=''
          date='5m ago'
          isRead={counter.A.isRead}

        />
        <Card
          handdleClick={() => handdleClick('J')}
          image='jacob-thompson'
          name='Jacob Thompson'
          text='has joined your group'
          message=''
          picture={null}
          activity='Chess Club'
          date='1 day ago'
          isRead={counter.J.isRead}
        />
        <Card
          image='rizky-hasanuddin'
          name='Rizky Hasanuddin'
          text='sent you a private message'
          message={`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                    I'm already having lots of fun and improving my game.`}
          activity=''
          picture={null}
          date='5 day ago'
          isRead={false}
        />
        <Card
          image='kimberly-smith'
          name='Kimberly Smith'
          text='commented on your picture'
          picture='/assets/images/image-chess.webp'
          message=''
          activity=''
          date='1 week ago'
          isRead={false}
        />
        <Card
          image='nathan-peterson'
          name='Nathan Peterson'
          text='reacted to your recent post'
          message=''
          picture={null}
          activity='5 end-game strategies to increase your win rate'
          date='2 weeks ago'
          isRead={false}
        />
        <Card
          image='anna-kim'
          name='Anna Kim'
          text='left the group'
          message=''
          picture={null}
          activity='Chess Club'
          date='2 weeks ago'
          isRead={false}
        />

      </div>
      <Footer />

    </main>
  )
}
export default App
