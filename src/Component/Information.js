import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {TbReplace} from 'react-icons/tb'
import {MdOutlineSecurity} from 'react-icons/md'
function Information() {
  return (
    <div className='information'>
      <div>
      <TbTruckDelivery className='info'/>
      <p>Free Delivery</p>
      </div>
      <div>
      <TbReplace className='info'/>
      <p>30 Days Replacement</p>
      </div>
      <div>
      <MdOutlineSecurity className='info'/>
      <p>2 Year Warranty</p>
      </div>
    </div>
  )
}

export default Information