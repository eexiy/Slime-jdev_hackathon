import React from 'react'
import './Content.scss'

export const Content = ({ img, descr }) => {
    return (
        <div className=''>
            <img src={img} alt="" />
            <p className='main__description'>{descr}</p>
        </div>
    )
}
