import StoreItem from '../store-item/StoreItem'
import './body.css'
export default function Body() {

  const Data = [
    {
      title: 'Beds',
      icon: {
        src: '/public/icons/bed.png',
        alt: 'bed'
      },
      size: 1.2
    },
    {
      title: 'Refrigerador',
      icon: {
        src: '/public/icons/refridegator.png',
        alt: 'bed'
      },
      size: 1
    },
    {
      title: 'Furniture',
      icon: {
        src: '/public/icons/furniture.png',
        alt: 'bed'
      },
      size: 0.5
    },
    {
      title: 'Oven',
      icon: {
        src: '/public/icons/oven.png',
        alt: 'bed'
      },
      size: 0.6
    },
    {
      title: 'Sofa',
      icon: {
        src: '/public/icons/sofa.png',
        alt: 'bed'
      },
      size: 1.2
    },
    {
      title: 'TV',
      icon: {
        src: '/public/icons/tv.png',
        alt: 'bed'
      },
      size: 0.25
    },
    {
      title: 'Washer-dryer',
      icon: {
        src: '/public/icons/washer-dryer.png',
        alt: 'bed'
      },
      size: 0.5
    },
    {
      title: 'Dining',
      icon: {
        src: '/public/icons/dining.png',
        alt: 'bed'
      },
      size: 2
    },
    {
      title: 'Desk',
      icon: {
        src: '/public/icons/desk.png',
        alt: 'bed'
      },
      size: 0.75
    },
    {
      title: 'Wardrobe',
      icon: {
        src: '/public/icons/wardrobe.png',
        alt: 'bed'
      },
      size: 3.2
    }
  ]

  return(
    <div className='body-container'>
      <div className='title'>
        <h1>What items to store?</h1>
        <p>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</p>
      </div>
      <div className='store-container'>
        <div className='store-items'>
          {Data.map(item=><StoreItem item={item} />)}
        </div>
        <div className='btn-container'>
          <button className='btn btn-clear'>Clear</button>
          <button className='btn btn-calculate'>Calculate</button>
        </div>
        <div className='summary-container'>
          <h2>Summary</h2>
          <ul className='summary-table'>
            <li>
              <div>Total Items</div>
              <div>12</div>
            </li>
            <li>
              <div>Total m²</div>
              <div>8.55</div>
            </li>
            <li>
              <div>Subtotal</div>
              <div>$1,710</div>
            </li>
            <li>
              <div>Tax</div>
              <div>$273.6</div>
            </li>
            <li>
                <div><b>Total</b></div>
                <div><b>$1,983.6</b></div>
            </li>
            <li>
                <div><b>Due Today 50%</b></div>
                <div><b>$991.8</b></div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}