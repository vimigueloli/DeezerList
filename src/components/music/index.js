import React, {useEffect, useState} from 'react';
import {connect,useDispatch,useSelector} from 'react-redux'
import styles from './css.module.css'
import star from '../../assets/star.svg'
import favo from '../../assets/fav.svg'

const Music = (props) => {
    
    const favoritos = useSelector(state => state.favorite)
    const dispatch = useDispatch()
    const time = new Date(props.time * 1000).toISOString().substr(14, 5)
    const item = {
        id: props.id,
        nome: props.music,
        artista: props.artist,
        capa: props.cover,
        tempo: time
    }
    const [state,setState] = useState(()=>{
        if(favoritos != undefined){
            for(let i= 0; i <= favoritos; i++){
                if(item == favoritos[i]){
                    return(true)
                }else{
                    return(false)
                }
            }
        }else{
            return(false)
        }
    })
    function handleFavorite(selecionado){
        if(state == false){
            setState(true)
        }else{
            setState(false)
        }
        return{
            type:'HANDLE_FAV',
            item: selecionado
        }
    }
    /*useEffect(() => {
        for(let i= 0; i <= favoritos; i++){
        
            if(item == favoritos[i]){
                setState(true)
            }
        }
    },[state])*/

    
    


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
                           {time}
                        </a>
                    </div>
                    
                </div>
                {
                    state? 
                    <img src={favo}
                        //onClick={()=> setFav(false)}
                        alt="star" 
                        className={styles.fav}
                    /> :
                    <img src={star} 
                        onClick={()=>(
                            dispatch(handleFavorite(item))
                        )}
                        alt="star" 
                        className={styles.fav}
                    />
                }
                
            </div>
            <div className={styles.divider}/>
        </section>
    )
}

export default connect(state=>({state: state}))(Music)