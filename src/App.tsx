import './App.css'
import Countries from './components /countries/Countries'
import Header from './components /header/Header'

function App() {
  
  document.title = "Rest-countries";

  return (
    <>
      <Header />
      <Countries />
    </>
  )
}

export default App
