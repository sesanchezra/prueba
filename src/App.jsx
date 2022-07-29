import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import icon1 from "./assets/icon/3d-stripy-flower-in-red-pot.png"
import icon2 from "./assets/icon/3d-stripy-light-green-plant-in-beige-pot.png"
import icon3 from "./assets/icon/casual-life-3d-monstera-plant-with-holes-in-its-leaves.png"
import icon4 from "./assets/icon/casual-life-3d-pink-pomegranate.png"
import icon5 from "./assets/icon/casual-life-3d-spotted-blue-succulent-plant.png"
import icon6 from "./assets/icon/casual-life-3d-vase-with-tulips-glasses-and-pencil-2.png"
import Header from './components/Header'
import { useEffect } from 'react'
import axios from 'axios'
import Quotes from './components/Quotes'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  // Random Icon for quotes
  const iconArray = [
    icon1, icon2, icon3, icon4, icon5, icon6
  ]

  const randomIcon = (iconArray) => {
    return Math.floor(Math.random() * iconArray.length)
  }



  // Quotes json - random

  const randomIndexQuote = (quotes) => {
    return Math.floor(Math.random() * quotes.length)
  }


  const [randomQuote, setRandomQuote] = useState(quotes[randomIndexQuote(quotes)])



  // Random user
  const [randomUser, setRandomUser] = useState()

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(res => setRandomUser(res.data.results[0]))
      .catch(error => console.log(error))
  }, [])

  // Link guia - https://dribbble.com/shots/15648656-Govoroon-App/attachments/7441406?mode=media

  // Link pattern - https://doodad.dev/pattern-generator/

  // Estado active de visualizacion

  const [quotesIsActive, setQuotesIsActive] = useState(true)
  const [userIsActive, setUserIsActive] = useState(false)

  const changeActive = () => {
    setQuotesIsActive(!quotesIsActive)
    setUserIsActive(!userIsActive)
  }

  return (
    <div className="App">
      <Header
        user={randomUser}
      />
      <div className="tittle">
        <h2>Quotes</h2>
      </div>
      <div className="quotes-box">
        <Quotes
          quote={randomQuote}
        />
        <Quotes
          quote={randomQuote}
        />
        <Quotes
          quote={randomQuote}
        />
      </div>

      <Footer
        quotesState={quotesIsActive}
        userState={userIsActive}
        changeActive={changeActive}
      />

    </div>
  )
}

export default App
