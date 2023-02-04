import React, { useState } from 'react'
import { useCart } from '../Context/ProductContext'

function Filter() {

  const company = ['','samsung', 'lenova', 'asus', 'rolex', 'apple', 'dell', 'nokia']
  const category = ['All', 'Mobile', 'Laptop', 'Computer', 'Accessories', 'Watch']
  const { productDispatch, productState: { selectPrice } } = useCart(

  )
  return (
    <div className='sidebar'>
      <input style={{ padding: '4px 3px' }} placeholder='SEARCH' onChange={(e) => productDispatch({
        type: 'SEARCH',
        payload: e.target.value
      })} />
      <div className='select_prod'>
        <h3>Company</h3>
        <select onChange={(e) => productDispatch({
          type: 'SELECT_VALUE',
          payload: e.target.value
        })}>
          {company.map(ele => <option key={ele} value={ele}>{ele}</option>)}
        </select>
      </div>
      <div className='prod_category'>
        <h3>Category</h3>
        {category.map((value, index) => (
          <span 
            key={index} onClick={() => {
              
              productDispatch({
                type: 'CATEGORY',
                payload: value.toLowerCase()
              })
            }
            }>{value}</span>
        ))}
      </div>
      <div className='prod_price'>
        <h3 >Price</h3>
        <label style={{ margin: '10px 0', display: 'block', color: 'green' }}>{selectPrice}</label>
        <input type='range' min='0' max='6000000'  onChange={(e) => productDispatch({
          type: 'RANGE',
          payload: e.target.value
        })} />

      </div>
      <button style={{
        background:'transparent',
        border:'1px solid gray',
        borderRadius:'5px',
        padding:'5px'

      }}
        onClick={() => productDispatch({
          type: 'CLEAR_FILTER'
        })}
      >Clear Filter</button>
    </div>

  )
}

export default Filter