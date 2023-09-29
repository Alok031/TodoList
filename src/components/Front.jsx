import React, { useState } from 'react'
import './Front.css'

const Front = () => {
  const [inputN, setInputN] = useState("")
  const [items, setItems] = useState([])
  const handleChange = (event) =>{
    setInputN(event.target.value)
  }
  const handleClick = () =>{
    setItems((prevItem)=>{
         return [...prevItem,inputN];
    })
    setInputN("")
  }
  return (
    <>
      <div className="container">
        <div className="contain">
        <br />
          <h1>TodoList</h1>
          <br />
          <input type="text"  onChange={handleChange} value={inputN}/>
          <button className="btn" onClick={handleClick}>+</button>
          
          <ul className='myUL'>
            {items.map((itemVal)=>{
              return <li>{itemVal}</li>;  
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Front
