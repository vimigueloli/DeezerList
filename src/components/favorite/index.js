import React from 'react'
import styles from './css.module.css'

export function Favorite(props){
    return(
        <section >
            <div className={styles.content}>
                <img onClick={props.onClick} src={props.cover} alt={"capa"} className={styles.image}/>
                <div onClick={props.onClick} className={styles.data}>
                    <h6 className={styles.musig}>
                        {props.music}
                    </h6>
                    <div className={styles.artist}>
                        <a>
                            {props.artist}
                        </a>
                        <a>
                           {props.time}
                        </a>
                    </div>
                    
                </div>
                <div className={styles.delete}/>
                
            </div>
            <div className={styles.divider}/>
        </section>
    )
}