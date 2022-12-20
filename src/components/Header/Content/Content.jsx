import React from 'react'
import { Button } from '../../Button/Button'
import './Content.scss'

export const Content = () => {
    return (
        <div className="header__content">
            <h1 className="header__content-title">
                Предлагаем лучшую музыку слушателям по всему миру
            </h1>
            <div className='header__content-btns'>
                <Button>Войти</Button>
                <Button>Зарегистрироваться</Button>
            </div>
        </div>
    )
}
