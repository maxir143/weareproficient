import { useState } from 'react'



export default function MobileNavbar({items}){
  const [open, setOpen] = useState(false)

  const MobileMenu = (items) => {
    return(
      <div className='mobile-menu'>
        <ul className='mobile-navbar-items'>
          {items.map(({title}, index)=><li className='mobile-navbar-item' key={index}>{title}</li>)}
          <img onClick={()=>setOpen(false)} className='hamburguer-close' src='/icons/hamburger-close.png' alt='' />
        </ul>
      </div>
    )
  }

  return (
    open 
    ? MobileMenu(items) 
    : <img onClick={()=>setOpen(true)} className='hamburguer-open' src='/icons/hamburger-open.png' alt='' />
  )
}