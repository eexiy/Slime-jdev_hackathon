import React from 'react'
import './Button.scss'

export const Button = ({ children }) => {
    return (
        <button className='button'>
            {children}
        </button>
    )
}
