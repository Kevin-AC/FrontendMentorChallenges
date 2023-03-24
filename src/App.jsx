import Card from './components/Card'

function App () {
  return (
    <div className='bg-white border w-full grid place-content-center min-h-screen '>
      <div className='w-[375px] p-4 h-auto flex flex-col gap-4 '>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2  items-center'>
            <p className='text-2xl font-extrabold text-Verydarkblue'>Notifications</p>
            <span className='bg-Blue w-7 h-6 grid place-content-center text-White font-bold rounded-md'>3</span>
          </div>
          <button className='border-none outline-none text-Darkgrayishblue font-medium'>Mark all as read</button>
        </div>
        <Card
          image='mark-webber'
          name='Mark Webber'
          text='reacted to your recent post'
          picture=''
          message=''
          activity='My first tournament today!'
          date='1m ago'
          notification
        />
        <Card
          image='angela-gray'
          name='Angela Gray'
          text='followed you'
          picture=''
          message=''
          activity=''
          date='5m ago'
          notification
        />
        <Card
          image='jacob-thompson'
          name='Jacob Thompson'
          text='has joined your group'
          picture=''
          message=''
          activity='Chess Club'
          date='1 day ago'
          notification
        />
        <Card
          image='rizky-hasanuddin'
          name='Rizky Hasanuddin'
          text='sent you a private message'
          picture=''
          message={`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                    I'm already having lots of fun and improving my game.`}
          activity=''
          date='5 day ago'
          notification={false}
        />
        <Card
          image='kimberly-smith'
          name='Kimberly Smith'
          text='commented on your picture'
          picture='/assets/images/image-chess.webp'
          message=''
          activity=''
          date='1 week ago'
          notification={false}
        />
        <Card
          image='nathan-peterson'
          name='Nathan Peterson'
          text='reacted to your recent post'
          picture=''
          message=''
          activity='5 end-game strategies to increase your win rate'
          date='2 weeks ago'
          notification={false}
        />
        <Card
          image='anna-kim'
          name='Anna Kim'
          text='left the group'
          picture=''
          message=''
          activity='Chess Club'
          date='2 weeks ago'
          notification={false}
        />

      </div>

    </div>
  )
}
export default App
