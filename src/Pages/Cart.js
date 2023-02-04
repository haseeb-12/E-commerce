import { useEffect, useState } from 'react'
import { useCart } from '../Context/ProductContext'
import { AiOutlineDelete } from 'react-icons/ai'

function Cart() {
  const { state: { cart }, dispatch } = useCart()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number((cur.price) * (cur.qty)), 0))
  }, [cart])
  return (
    <div style={{ minHeight: 'calc(100vh - 500px)' }}>
      <h2 style={{ marginLeft: '30px' }}>Shopping Cart</h2>
      {cart.length > 0 &&

        <div className='cart_card'>
          <h3>Item</h3>
          <h3 style={{ paddingLeft: '250px' }}>Quantity</h3>
          <h3>Operation</h3>
        </div>}

      {cart.map(single => (
        <div className='cart_card'>
          <div className='left_side'>
            <div className='cart_image'>
              <img src={single.image} alt='' />
            </div>
            <h3>{single.name}</h3>
          </div>
          <div style={{ display: 'flex', columnGap: '10px' }}>
            <button
              className='btn_qty'
              onClick={() => {
                dispatch({
                  type: 'INCR',
                  payload: single.id
                })
              }
              }>+</button>
            <h2>{single.qty}</h2>
            <button className='btn_qty'
              onClick={() => {
                dispatch({
                  type: 'DECRE',
                  payload: single.id
                })
              }
              }
            >-</button>
          </div>
          <div className='right_side'>
            <h4
            >${single.price}</h4>
            <button className='btn_remove' onClick={() => dispatch({
              type: 'REMOVE_TO_STORE',
              payload: single.id
            })}><AiOutlineDelete /></button>

          </div>

        </div>
      ))}
      {cart.length > 0 &&
        <p style={{ textAlign: 'end', color: 'green', marginRight: '40px' }}>Total Amount---Rs{total}</p>}
    </div>
  )
}

export default Cart