import React from 'react'
import { Display } from '../display'
import { Favorite } from '../favorite'
import { Music } from '../music'
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

    /*fetch() https://api.deezer.com/playlist/3155776842*/

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
                        <Music music={track.music} artist={track.artist}/>
                        <Music music={track.music} artist={track.artist}/>
                        <Music music={track.music} artist={track.artist}/>
                        <Music music={track.music} artist={track.artist}/>
                    </div>
                </div>
            </div>
        </section>
    )
}