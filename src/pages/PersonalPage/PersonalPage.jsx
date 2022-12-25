import React, { useState } from 'react'
import { Nav } from '../../components/Header/Nav/Nav'
import { Footer } from '../../components/Footer/Footer'
import './PersonalPage.scss'
import avaLogo from '../../assets/avaLogo.jpg'
import { ModalPersonalPage } from './ModalPersonalPage/ModalPersonalPage'

export const PersonalPage = () => {
    const [modal, setModal] = useState(false)
    const [playList, setPlayList] = useState([])

    const handleModal = () => {
        setModal(prev => prev = true)
    }

    return (
        <div className='personal__page'>
            <Nav />
            <div className='personal__page-content'>
                <img src={avaLogo} alt="" className="personal__page-ava" />
                <div>
                    <h2 className='personal__page-name'>Aruuke</h2>
                    <p className='personal__page-email'>aruuke23zh@gmail.com</p>
                    <p className='personal__page-signedUp'>Зарегистрирована с марта 2022 года</p>
                </div>
                <div className="personal__page-edit">
                    <span></span>
                </div>
            </div>
            {modal === true
                ? <button style={{ display: 'none' }} onClick={handleModal} className="personal__page-createPlaylist">Создать плейлист</button>
                : <button onClick={handleModal} className="personal__page-createPlaylist">Создать плейлист</button>
            }

            <div className="personal__page-myPlayLists">
                <h2 className="personal__page-title">Мои плейлисты</h2>
                {playList.length
                    ? playList.map(item => <p className="personal__page-descr" key={item.id}>{item}</p>)
                    : <p className="personal__page-descr">У вас нет ранее созданных плейлистов</p>
                }
            </div>
            {modal && <ModalPersonalPage setModal={setModal} />}
            <Footer />
        </div>
    )
}
