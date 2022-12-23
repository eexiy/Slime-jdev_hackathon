import React, { useState, useEffect } from 'react'
import { Header } from '../../components/Header/Header';
import axios from 'axios';
import "./Artists.scss";
import { Container } from '../../components/Container/Container';


export const Artists = () => {

    const [artists, setArtists] = useState([])

    useEffect(() => {
        const getArtists = async () => {
            await axios.get("http://34.116.147.191/music/artist/")
                .then((resp) => {
                    setArtists(resp.data)
                    console.log(artists)
                })
                .catch(err => console.log(err))
        }
        getArtists()
    }, [artists])

    return (
        <div>
            <Container>
                <Header />
                <h1 className='main__title'>Топ Артисты</h1>
                <div className='main__content'>

                    {artists.map(artist => {
                        return <div key={artist.slug}>
                            <div className='poster-box'><img className='poster' alt='poster' src={artist.image}></img></div>
                            <div className='artist-title'>{artist.user} - {artist.title}</div>
                        </div>
                    })}
                </div>
            </Container>
        </div>
    )
}
