import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../Context/ProductContext';
import { Link } from 'react-router-dom';

const Product = () => {
  const { state: { products }, dispatch, productState: { input, category, selectCompany, selectPrice } } = useCart();

  console.log('1',input,category,selectCompany)
  const filterProduct = React.useMemo(() => {
    let filterProd = [...products];
   

    if (input) {
      filterProd = filterProd.filter(product => product.name.toLowerCase().includes(input));
    }

    if (category !== 'all') {
      filterProd = filterProd.filter(product => product.category === category);
    }

    if (selectCompany) {
      filterProd = filterProd.filter(product => product.company === selectCompany);
    }

    if (selectPrice) {
      filterProd = filterProd.filter(product => product.price >= selectPrice);
    }

    return filterProd;
  }, [input, category, selectCompany, selectPrice, products]);
console.log(filterProduct)
  return (
    <div className='product_card'>
      {filterProduct.map(product => (
        <div className='card' key={product.id} >
          <Link to={`/shop/${product.id}`}>
            <div className='card_image'>
              <img src={product.image} />
            </div>
          </Link>
          <div className='card_content'>
            <h4 style={{ color: '#b8b8b8' }}>{product.company}</h4>
            <h2>{product.name}</h2>
            <div className='card_text'>
              <h3>Rs-{product.price}</h3>
              <AiOutlineShoppingCart
                onClick={() => dispatch({
                  type: 'ADD_TO_STORE',
                  payload: product
                })}
                className='cart_icon' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
