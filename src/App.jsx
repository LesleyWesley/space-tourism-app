import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "../src/pages/HomePage.jsx"
import DestinationPage from "../src/pages/DestinationPage.jsx"
import CrewPage from "../src/pages/CrewPage.jsx"
import TechnologyPage from "../src/pages/TechnologyPage.jsx"

function App() {
  return (
    <div>
      <HomePage />
      <DestinationPage />
      <CrewPage />
      <TechnologyPage />
    </div>
  )
}

export default App
