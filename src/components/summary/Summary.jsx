import { useEffect } from "react"
import { useCart } from "../../context/dataContext"
import './summary.css'

export default function Summary(){
  const {summaryData, calculateSummary, items} = useCart()
  useEffect(()=>{
    calculateSummary(items)
  },[])
  return(
    <div className='summary-container'>
      <h2>Summary</h2>
      <ul className='summary-table'>
        {summaryData.map(({title, result,bold}, index)=>{
          return(
            <li key={index}>
                <div>{ bold ? <b>{title}</b> :  title}</div>
                <div>{ bold ? <b>{result}</b> :  result}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}