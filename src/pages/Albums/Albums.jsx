import React, { useState, useEffect } from 'react'
import { Header } from '../../components/Header/Header';
import "./Albums.scss";
import { Container } from '../../components/Container/Container';


export const Albums = () => {

    const [music, setMusic] = useState([]);
    const [postAlbums, setPostAlbums] = useState([]);

    useEffect(() => {
        fetch('http://34.116.147.191/music/note/')
            .then((resp) => resp.json())
            .then((data) => {
                setMusic(data)
            })
            .catch(error => console.log(error))

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://34.116.147.191/album/add-albums/', {
            method: 'POST',
            body: JSON.stringify({
                id: Math.random().toString(12).slice(2)
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((postAlbum) => {
                setPostAlbums((postAlbums) => [postAlbum, ...postAlbums])
                console.log(postAlbums)
            })
            .catch(error => console.log(error.message))
    }

    var groupedArtist = {};

    music.forEach(function (row) {
        if (groupedArtist[row.user]) {
            groupedArtist[row.user].push(row);
        } else {
            groupedArtist[row.user] = [row];
        }
    });

    return (
        <div>
            <Container>
                <Header />

                <h1 className='main__title'>Топ Альбомы</h1>
                <div className='main__content'>
                    {Object.keys(groupedArtist).map((key, index) => {
                        return (
                            <div key={index}>
                                <div className='poster-box'>
                                    <img className='poster'
                                        alt='poster'
                                        src={groupedArtist[key][0].image}
                                        onClick={handleSubmit}
                                    ></img>
                                </div>
                                <div className='album-title'>{key}'s  album {groupedArtist[key].title}</div>
                            </div>
                        );
                    })}

                </div>
            </Container>
        </div>
    )
}
