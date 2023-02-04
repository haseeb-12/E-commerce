import React from 'react'

function Image({imgs=[{url:''}]}) {
    return (
        <div className='single_image'>
            
            <img src={imgs[0].url } className='main_image'/>
            <div className='single_sub_image'>
                {imgs.slice(1,3).map(ele=>(
                    <div  className='image_down'>
                        <img  src={ele.url}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Image