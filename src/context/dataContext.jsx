import { useState, createContext, useContext } from 'react'

const DataContext = createContext()

export function useCart(){
  return useContext(DataContext)
}



export function DataProvider({children}){
  const itemsData = [
    {
      title: 'Beds',
      icon: {
        src: '/icons/bed.png',
        alt: 'bed'
      },
      size: 1.2
    },
    {
      title: 'Refrigerador',
      icon: {
        src: '/icons/refridegator.png',
        alt: 'bed'
      },
      size: 1
    },
    {
      title: 'Furniture',
      icon: {
        src: '/icons/furniture.png',
        alt: 'bed'
      },
      size: 0.5
    },
    {
      title: 'Oven',
      icon: {
        src: '/icons/oven.png',
        alt: 'bed'
      },
      size: 0.6
    },
    {
      title: 'Sofa',
      icon: {
        src: '/icons/sofa.png',
        alt: 'bed'
      },
      size: 1.2
    },
    {
      title: 'TV',
      icon: {
        src: '/icons/tv.png',
        alt: 'bed'
      },
      size: 0.25
    },
    {
      title: 'Washer-dryer',
      icon: {
        src: '/icons/washer-dryer.png',
        alt: 'bed'
      },
      size: 0.5
    },
    {
      title: 'Dining',
      icon: {
        src: '/icons/dining.png',
        alt: 'bed'
      },
      size: 2
    },
    {
      title: 'Desk',
      icon: {
        src: '/icons/desk.png',
        alt: 'bed'
      },
      size: 0.75
    },
    {
      title: 'Wardrobe',
      icon: {
        src: '/icons/wardrobe.png',
        alt: 'bed'
      },
      size: 3.2
    }
  ]

  const commonData = {
    squareMeterPrice: 200,
    taxPercent: 0.16
  }


  const [items, setItems] = useState({})
  const [summaryData, setSummaryData] = useState([])
  
  const addItem = ({title}) => {
    setItems(oldItems => {
     if (oldItems[title]) {
        oldItems[title] += 1
     }else{
        oldItems[title] = 1
     }
     //calculateSummary(oldItems)
     return {...oldItems}
    })
  }

  const removeItem = ({title}) => {
    setItems(oldItems => {
     if (oldItems[title]) {
        oldItems[title] = Math.max(0, oldItems[title] - 1)
     }else{
        oldItems[title] = 0
     }
     //calculateSummary(oldItems)
     return {...oldItems}
    })
  }

  const resetItems = () => {
    setItems({})
    calculateSummary({})
  }

  const calculateSummary = (items) => {
    const totalItems = Object.entries(items).reduce((pre,[key, value]) => pre + value, 0)
    const totalSquareMeters = Object.entries(items).reduce((pre,[key, value]) => {
      return pre + itemsData.filter(({title}) => title === key)[0].size * value
    }, 0)
    const totalPrice = commonData.squareMeterPrice * totalSquareMeters

    const totalTaxes = totalPrice * commonData.taxPercent

    const totalAfterTaxes = totalPrice + totalTaxes
    setSummaryData(
      [
        {
          title: 'Total Items',
          result: totalItems,
          bold: false
        },
        {
          title: 'Total m²',
          result: `${totalSquareMeters.toFixed(2)}m²`, //'8.55'
          bold: false
        },
        {
          title: 'Subtotal',
          result: `$${totalPrice.toFixed(2)}`,
          bold: false
        },
        {
          title: 'Tax',
          result: `$${totalTaxes.toFixed(2)}`,
          bold: false
        },
        {
          title: 'Total',
          result: `$${totalAfterTaxes.toFixed(2)}`,
          bold: true
        },
        {
          title: 'Due Today 50%',
          result: `$${(totalAfterTaxes * .5).toFixed(2)}`,
          bold: true
        }
      ]
    )
  }

  return(
    <DataContext.Provider value={{items, itemsData, addItem, removeItem, resetItems, summaryData, calculateSummary}}>
      {children}
    </DataContext.Provider>
  )
}