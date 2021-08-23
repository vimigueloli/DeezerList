import React from 'react';
import styles from './css.module.css'
import star from '../../assets/star.svg'
import fav from '../../assets/fav.svg'

export default function Music(props){
    //const minutes = Math.floor(props.time/60)
    const time = new Date(props.time * 1000).toISOString().substr(14, 5)
    return(
        <section onClick={props.onClick}>
            <div className={styles.content}>
                <img src={props.cover} alt={"capa"} className={styles.image}/>
                <div className={styles.data}>
                    <h6 className={styles.musig}>
                        {props.music}
                    </h6>
                    <div className={styles.artist}>
                        <a>
                            {props.artist}
                        </a>
                        <a>
                           {time}
                        </a>
                    </div>
                    
                </div>
                <img src={star} alt="star" className={styles.fav}/>
            </div>
            <div className={styles.divider}/>
        </section>
    )
}