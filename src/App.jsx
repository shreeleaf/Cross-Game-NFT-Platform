import Navbar from './components/navbar/navbar'
import HeroSection from './components/hero/hero'
import ItemGrid from './components/offers/ItemGrid'
import GameCards from './components/games/GameCards'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ItemGrid></ItemGrid><br />
      <GameCards></GameCards>
    </>
  )
}

export default App
