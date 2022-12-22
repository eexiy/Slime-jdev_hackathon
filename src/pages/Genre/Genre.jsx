import React, {useState, useEffect} from 'react'
import { Content } from '../../components/Header/Content/Content'
import { Header } from '../../components/Header/Header';
import axios from 'axios';
import poster from "../../assets/img2.png";
import "./Genre.scss";


export const Genre = () => {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        const getGenres = async () => {
            await axios.get("http://34.116.147.191/music/genre/")
            .then((resp) => {
                setGenres(resp.data)
                console.log(genres)
            })
            .catch(err => console.log(err))
        }
        getGenres()
    }, [])

    return (
        <div>
            <Header />
            <h1 className='main__title'>Жанры</h1>
            <div className='main__content'>
                
                    {genres.map(genre => {
                        return <div key={genre.genre}>
                                    <div className='poster-box'><img className='poster' alt='poster' src={poster}></img></div>
                                    <div className='genre-title'>{genre.genre}</div>
                                </div>
                    })}
            </div>
        </div>
    )
}
