import React, {useState, useEffect} from 'react'
import { Display } from '../display'
import { Favorite } from '../favorite'
import  Music  from '../music'
import { Search } from '../search'
import styles from './css.module.css'
import star from '../../assets/star.svg'
import logo from '../../assets/Logotype/DIGITAL RGB/SVG/Deezer_Logo_RVB_MonoWhite.svg'
import fav from '../../assets/fav.svg'
import starM from '../../assets/star-menu.svg'
import favM from '../../assets/fav-menu.svg'
import axios from 'axios'

export function Home(){
    const track = {
        music: 'Ruin',
        artist: 'Shawn Mendes'
    }
    const [playlist,setPlaylist] = useState([])
    //https://api.deezer.com/playlist/3155776842

    

    
    useEffect(() => {

        var top = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842',
            headers: {
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                'x-rapidapi-key': 'd376dd7e3bmsh26e173b303a5bb2p121984jsn86fa401feed3'
            }
        }
        axios.request(top).then(function (response) {
            setPlaylist(response.data.tracks.data);
            //console.log(response.data.tracks.data)
        }).catch(function (error) {
            console.error(error);
        });
        //playlist.map(response => console.log(response.title))
        //setPlaylist(Object.values(playlist))
        //console.log(typeof playlist)
    },[])
    

    
    return(
        <section>
            <div className ={styles.header}>
                <img src={logo} atlt="logo" className={styles.logo} />
            </div>
            <div className={styles.content}>
                <div className={styles.display}> 
                    <Display />
                </div>
                <div className={styles.list}>
                    <div className={styles.listHeader}>
                        <Search />
                        <img src={starM} atlt="star" className={styles.fav} />
                    </div>
                    <div className={styles.lista}>
                        {   
                            //console.log('alterou'),
                            playlist.map(response => <Music key={response.id} music={response.title} artist={response.artist.name}/>)
                                
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}