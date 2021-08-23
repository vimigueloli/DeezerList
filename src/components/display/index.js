import React, {useEffect,useState} from 'react'
import styles from './css.module.css'

export function Display(props){
    const  [song,setSong] = useState(props.prev) 

    useEffect(()=> {
        
        
    },[song])
    if(props.prev != undefined){
        let audio = document.getElementById('audio')
        if(audio != undefined){
            
            audio.load()
            audio.play()
        } 
    }
    return(
        <div>
            <div className={styles.container}>
                
                {
                    props.cover ?
                    <img src={props.cover} className={styles.image} alt={'capa'} /> :
                    <div className={styles.image}>
                        <h2>SELECIONE UMA MUSICA</h2>
                    </div>
                }
                
            </div>
            
            <div className={styles.player}>
                { 
                    props.prev ?
                    <audio id='audio' className={styles.play} controls autoPlay name='preview'>
                        <source src={props.prev} type="audio/mpeg" />
                        <source src={props.prev} type="audio/ogg" />
                        <source src={props.prev} type="audio/wav" />
                    </audio>
                    :
                    <></>
                }
                
                
            </div>
            <div className={styles.original}>
                    <a target="_blank" href={props.ouvir} className={styles.botao}> MUSICA COMPLETA</a>
            </div>
        </div>
    )
}