import React from 'react'
import { Header } from '../../components/Header/Header'
import { Main } from '../../components/Main/Main'
import { Footer } from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'

export const HomePage = () => {
    return (
        <div>
            <Container>
                <Header />
                <Main />
            </Container>
            <Footer />
        </div>
    )
}
