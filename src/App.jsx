import Navbar from './components/nabvar/Navbar'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import NavbarContainer from './components/nabvar/NavbarContainer'
import FooterContainer from './components/footer/FooterContainer'
import { DataProvider } from './context/dataContext'

function App() {
  return (
  <DataProvider>
    <NavbarContainer>
      <Navbar/>
    </NavbarContainer>
    <Body />
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </DataProvider>
  )
}

export default App
