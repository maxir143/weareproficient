import { useState } from 'react'
import './store-item.css'

export default function StoreItem({item}){
  const {title, icon} = item
  const [count, setCount] = useState(0)

  const handleAdd = () => setCount((currCount) => Math.max(0, currCount += 1))
  const handleRemove = () => setCount((currCount) => Math.max(0, currCount -= 1))
  return(
    <div className='item'>
      <div className='card'>
        <img src={icon.src} alt={icon.alt} />
        <p >{title}</p>
      </div>
      <div className='btn-container'>
        <button onClick={handleRemove} className='minus'>-</button>
        <p className='count'>{count}</p>
        <button onClick={handleAdd} className='plus'>+</button>
      </div>
    </div>
  )
}