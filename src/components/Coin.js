import React from 'react'

const Coin = ({ name, icon, price, symbol }) => {
  return (
    <div className='coin'>
        <h1>Name: {name}</h1>
        <img src={icon} alt={icon} />
        <h3>Price: {price}</h3>
        <j3>Symbol: {symbol}</j3>
    </div>
  )
}

export default Coin