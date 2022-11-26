import { useCart } from '../../context/dataContext'
import StoreItemContainer from '../store-item/StoreItemContainer'
import Summary from '../summary/Summary'
import './body.css'
export default function Body() {
  const {resetItems, calculateSummary, items} = useCart()
  return(
    <div className='body-container'>
      <div className='title'>
        <h1>What items to store?</h1>
        <p>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</p>
      </div>
      <div className='store-container'>
        <StoreItemContainer/>
        <div className='btn-container'>
          <button onClick={resetItems} >Clear</button>
          <button onClick={()=>calculateSummary(items)}>Calculate</button>
        </div>
        <Summary />
      </div>
    </div>
  )
}