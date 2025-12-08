

import CardList from './components/cardList'
import Header from './components/header'
import Nav from './components/nav'
import './index.css'

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-8 items-center bg-neutral-50 dark:bg-Neutral-900 p-6">
      <Header />
      <Nav />
      <CardList />
    </main>
  )
}

export default App
