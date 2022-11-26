import { useCart } from '../../context/dataContext'
import './store-item.css'

export default function StoreItem({item}){
  const {title, icon} = item
  const {items, addItem, removeItem} = useCart()

  const count = items[title] || 0

  return(
    <div className='item'>
      <div className='card'>
        <img src={icon.src} alt={icon.alt} />
        <p >{title}</p>
      </div>
      <div className='btn-container'>
        <button onClick={()=>removeItem(item)} className='minus'>-</button>
        <p className='count'>{count}</p>
        <button onClick={()=>addItem(item)} className='plus'>+</button>
      </div>
    </div>
  )
}