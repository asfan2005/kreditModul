import React from 'react'
import { Afzalliklar, Header, Home, Kurslar, Oqituvchi, Statistika,News, Footer } from "./components/index";
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Afzalliklar/>
      <Kurslar/>
      <Oqituvchi/>
      <Statistika/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App
