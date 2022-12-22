import React from 'react'
import './Footer.scss'
import footerLogo from '../../assets/footerLogo.png'
import { Container } from '../Container/Container'


export const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className="footer__content">
                    <div className='footer__content-left'>
                        <img src={footerLogo} alt="" />
                        <p className="footer__description">
                            Copyright © 2022 Penske Business Media, LLC. All Rights reserved.
                        </p>
                    </div>
                    <div className='footer__content-right'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
