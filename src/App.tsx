import './App.css'
import Countries from './components /countries/Countries'
import Header from './components /header/Header'
import Image from './assets/Vitejs-logo.svg'

function App() {
  
  document.title = "Rest-countries";

  

  return (
    <>
      <link rel="icon" href={Image} />
      <Header />
      <Countries />
    </>
  )
}

export default App
