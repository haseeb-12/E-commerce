import { createContext, useContext, useEffect, useReducer } from 'react'
import React from 'react'
import axios from 'axios'
import { reducer } from '../Reducer/reducer'
import { productReducer } from '../Reducer/reducer'

const ContextStore = createContext()
const initialState = {
  cart: [],
  products: [],
  error: false,
  isLoading: true,
  qty: 1,
  singleProduct:{}

}



function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [productState, productDispatch] = useReducer(productReducer, {
    input: '',
    selectCompany: '',
    category: 'all',
    selectPrice: 0

  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.pujakaitem.com/api/products',{
          mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
            }
        })
        const resData = await res.data
        
        dispatch({
          type: 'API_REQ',
          payload: resData
        })
      }
      catch (err) {
        dispatch({
          type: 'API_ERROR',
          payload: err
        })
      }
    }
    fetchData()
  }, [])


  // single product
  const singlePage=async(url)=>{
    try{
      const resData=await (await axios.get(url)).data
      dispatch({
        type:'SINGLE_API_DATA',
        payload:resData
      })
    }
    catch(err){
      
    }
  }
  




  return (<ContextStore.Provider value={{ state, dispatch, productDispatch, productState ,singlePage}}>{children}
  </ContextStore.Provider>
  )
}
const useCart = () => {
  return useContext(ContextStore)
}
export { ProductContext, useCart }