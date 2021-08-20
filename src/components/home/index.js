import React from 'react'
import { Display } from '../display'
import { Favorite } from '../favorite'
import { Music } from '../music'
import { Search } from '../search'
import styles from './css.module.css'
import star from '../../assets/star.svg'
import fav from '../../assets/fav.svg'

export function Home(){
    const track = {
        music: 'Ruin',
        artist: 'Shawn Mendes'
    }

    return(
        <section>
            <div className ={styles.header}>
                <h1>Deezer</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.display}> 
                    <Display />
                </div>
                <div className={styles.list}>
                    <div className={styles.listHeader}>
                        <Search />
                        <img src={star} atlt="star" className={styles.fav} />
                    </div>
                    <div className={styles.lista}>
                        <Music music={track.music} artist={track.artist}/>
                        <Favorite music={track.music} artist={track.artist}/>
                    </div>
                </div>
            </div>
        </section>
    )
}