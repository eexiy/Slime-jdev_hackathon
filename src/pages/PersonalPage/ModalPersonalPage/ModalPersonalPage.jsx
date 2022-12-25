import React from 'react'
import './ModalPersonalPage.scss'

export const ModalPersonalPage = ({ setModal }) => {


    const handleCreatePlaylist = () => {
        setModal(prev => prev === false)
    }

    return (
        <div className='modal__personalPage'>
            <div className="modal__personalPage-top">
                <h1 className="modal__personalPage-title">Введите название</h1>
                <input type="text" className="modal__personalPage-input" />
            </div>
            <button onClick={handleCreatePlaylist} className='modal__personalPage-createPlaylist'>Создать плейлист</button>
        </div>
    )
}
