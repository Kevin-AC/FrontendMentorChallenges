
import Card from './components/card'
import CardList from './components/cardList'
import Header from './components/header'
import Nav from './components/nav'
import './index.css'

function App() {
  return (
    <main className=" min-h-screen flex items-center justify-center flex-wrap gap-2 bg-dark-gradient p-2 pt-4 pb-12">
      <Header />
      <Nav />
      <CardList />
    </main>
  )
}

export default App
