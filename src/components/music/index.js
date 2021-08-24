import React, {useState} from 'react';
import styles from './css.module.css'
import star from '../../assets/star.svg'
import favo from '../../assets/fav.svg'

export default function Music(props){
    const [fav,setFav] = useState(false)
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
                {
                    fav? 
                    <img src={favo}
                        onClick={()=> setFav(false)}
                        alt="star" 
                        className={styles.fav}
                    /> :
                    <img src={star} 
                        onClick={()=> setFav(true)}
                        alt="star" 
                        className={styles.fav}
                    />
                }
                
            </div>
            <div className={styles.divider}/>
        </section>
    )
}