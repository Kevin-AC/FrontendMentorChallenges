
import { useCards } from './hooks/useCards';
import CardList from './components/cardList'
import Header from './components/header'
import Nav from './components/nav'

import './index.css'


function App() {
  const { toggleCardActive,filteredCards,setFilter } = useCards();
  
  return (
    <main className="min-h-screen w-full flex flex-col gap-8 items-center bg-neutral-50 dark:bg-Neutral-900 p-6">
      <Header />
      <Nav 
        onAllClick={()=> setFilter('all')}
        onActiveClick={()=>setFilter('active')}
        onInactiveClick={()=>setFilter('inactive')}
      />
      <CardList 
        cards={filteredCards}
        onToggle={toggleCardActive}/>
    </main>
  )
}

export default App
