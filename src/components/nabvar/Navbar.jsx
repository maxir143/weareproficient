
import './nabvar.css'
export default function Navbar() {
  const navItems = [
    {
     title: 'How We Work' 
    },
    {
      title: 'Services' 
    },
    {
      title: 'Free Quote' 
    },
    {
      title: 'Contact' 
    },
  ]
  const navLogo = {
    src: '/public/icons/cil_house.png',
    alt: 'main logo'
  }

  return(
    <div className='navbar'> 
      <img className='navbar-logo' src={navLogo.src} alt={navLogo.alt} />
      <ul className='navbar-items'>
        {navItems.map(({title}, index)=><li className='navbar-item' key={index}>{title}</li>)}
      </ul>
    </div>
  )
}