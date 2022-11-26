import { useState } from 'react'
import Navbar from './components/nabvar/Navbar'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import NavbarContainer from './components/nabvar/NavbarContainer'
import FooterContainer from './components/footer/FooterContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <NavbarContainer>
      <Navbar/>
    </NavbarContainer>
    <Body />
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </>
  )
}

export default App
