import React from 'react'
import styles from './css.module.css'

export function Favorite(props){
    return(
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
            <div className={styles.delete} />
        </div>
    )
}