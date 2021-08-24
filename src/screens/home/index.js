import React, {useState, useEffect, useImperativeHandle} from 'react'
import { Display } from '../../components/display'
import { Favorite } from '../../components/favorite'
import  Music  from '../../components/music'
import Search  from '../../components/search'
import styles from './css.module.css'
import logo from '../../assets/Logotype/DIGITAL RGB/SVG/Deezer_Logo_RVB_MonoWhite.svg'
import axios from 'axios'
import starM from '../../assets/star-menu.svg'
import favM from '../../assets/fav-menu.svg'
import { connect } from 'react-redux'

const Home = () =>{
    const track = {
        music: 'Ruin',
        artist: 'Shawn Mendes'
    }
    const [favMenu, setFavMenu] = useState(false) 
    const [playlist,setPlaylist] = useState([])
    const [selected,setSelected] = useState([])
    //https://api.deezer.com/playlist/3155776842

    
    useEffect(() => {
        var top = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842',
            headers: {
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                'x-rapidapi-key': `${process.env.REACT_APP_DEEZER_KEY}`
            }
        }
        axios.request(top).then(function (response) {
            setPlaylist(response.data.tracks.data);
            //console.log(response.data.tracks.data)
        }).catch(function (error) {
            console.error(error);
        });
        //playlist.map(response => console.log(response))
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
                    {
                        selected.album ?
                        <Display ouvir={selected.link} prev={selected.preview} cover={selected.album.cover_big}/> :
                        <Display />
                    }
                    
                    
                </div>
                <div className={styles.list}>
                    {
                        favMenu ?
                            <div className={styles.listHeader}>
                                <img src={favM} 
                                    onClick={()=> setFavMenu(false)}
                                    atlt="star" 
                                    className={styles.fav} 
                                />
                            </div> :
                            <div className={styles.listHeader}>
                                <Search />
                                <img src={starM}
                                    onClick={()=> setFavMenu(true)} 
                                    atlt="star" 
                                    className={styles.fav} 
                                />
                            </div>
                    }
                        
                    <div className={styles.lista}>
                        {   
                            //console.log('alterou'),
                            playlist.map(response => <Music 
                                onClick={()=>{
                                        setSelected([])
                                        console.log(selected)
                                        setSelected(response)
                                        console.log(selected)
                                }}
                                cover={response.album.cover} 
                                time={response.duration} 
                                key={response.id} 
                                music={response.title} 
                                artist={response.artist.name}
                            />)
                                
                        }
                        <div className={styles.end} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({buscas: state.buscas}))(Home)