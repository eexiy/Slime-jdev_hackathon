import React from 'react'
import './Header.scss'
import { Nav } from './Nav/Nav'
import { Content } from './Content/Content'

export const Header = () => {
    return (
        <>
            <Nav />
            <Content />
        </>
    )
}