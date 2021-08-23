import React from 'react';
import styles from './css.module.css'
import star from '../../assets/star.svg'
import fav from '../../assets/fav.svg'

export default function Music(props){
    return(
        <section>
            <div className={styles.content}>
                <div className={styles.image}></div>
                <div className={styles.data}>
                    <h6 className={styles.musig}>
                        {props.music}
                    </h6>
                    <a className={styles.artist}>
                        {props.artist}
                    </a>
                </div>
                <img src={star} alt="star" className={styles.fav}/>
            </div>
            <div className={styles.divider}/>
        </section>
    )
}