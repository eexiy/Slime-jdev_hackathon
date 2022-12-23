import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SearchBar.scss";
import { NavLink } from 'react-router-dom';


function SearchBar() {

    const [query, setQuery] = useState('');
    const [music, setMusic] = useState([]);

    const api = "http://34.116.147.191";

    useEffect(() => {
        const fetchMusic = async () => {
            await axios.get(`${api}/music/artist/?search=${query}`)
                .then((response) => {
                    setMusic(response.data);
                    console.log(music)
                })
                .catch(error => console.log(error))
        }
        fetchMusic();

        if (query.length === 0 || query.length > 1) fetchMusic();
    }, [query]);


    return (
        <div>
            <input className='search-bar' type="text" placeholder="Поиск... " onChange={(e) => setQuery(e.target.value.toLowerCase())}></input>
            <div className='search-drop-down'>
                <ul>
                    {music.map(item => {
                        return query.length > 1 ? <li className='items-list' key={item.slug}><NavLink>{item.user + ' -'}  {item.title}</NavLink></li> : null
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar
