import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../Context/ProductContext'
import Image from '../Component/Image'
import Star from '../Component/Star'
import Information from '../Component/Information'

function SingleProduct() {
    const { id } = useParams()
    const { state: { singleProduct }, singlePage } = useCart()



    const { name, price, color, description, stock, stars, image ,reviews} = singleProduct


    const api = 'https://api.pujakaitem.com/api/products/'

    useEffect(() => {
        singlePage(`${api}${id}`)
    }, [])

    return (
        <>
            <div className='single_card'>
                <Image imgs={image} />

                <div className='single_body'>
                    <h4 style={{ fontSize: '25px', fontWeight: '100' }}>{name}</h4>
                    <Star stars={stars} reviews={reviews}/>
                    <p> <span > Price :</span>
                        <del style={{ color: 'grey' }}>
                            {price} ({100 - parseInt((price-10000) / (price) * 100)}%)
                        </del>
                    </p>
                    <p style={{ color: 'blue' }}>Deal of the Day Rs: {price-10000}</p>
                    <p><b>Availability :</b> {stock > 0 &&
                        <b style={{ color: stock > 0 ? 'green' : 'red' }}>{stock > 0 ? 'In Stock' : 'Out of Stock'}</b>}</p>
                    <p >Hurry up! only {stock} products left in stock</p>
                    <hr />
                    <h4>Description</h4>
                    <p style={{ color: '#333', fontWeight: '100' }}>{description}</p>
                    <hr/>
                    <Information/>
                </div>

            </div>
        </>
    )
}

export default SingleProduct