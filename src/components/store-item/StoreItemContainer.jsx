import { useCart } from '../../context/dataContext'
import './store-item.css'
import StoreItem from './StoreItem'
export default function StoreItemContainer(){
  const {itemsData} = useCart()
  return(
    <div className='store-items'>
      {itemsData.map((item, index) => <StoreItem key={index} item={item} />)}
    </div>
  )

}