import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

function Star({ stars, reviews }) {
    const rating = Array.from({ length: 5 }, (ele, index) => {
        let num = index + 0.5
     
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className='icon' />
                ) : stars >= num ? (
                    <FaStarHalfAlt className='icon' />
                ) : (
                    <AiOutlineStar className='icon' />
                )}
            </span>
        )
    })

    return (
        <div>
            {rating}
            <span> ({reviews} customer reviews)</span>
        </div>
    )
}

export default Star 