import React from 'react'
import '../Style/home.css'
import Product from '../Component/Product'

import Sidebar from '../Component/Sidebar'

function Shop() {


  return (
    <div className='shop'>
      <Sidebar  />
      <Product  />
    </div>
  )
}

export default Shop