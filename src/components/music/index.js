import React, {useState} from 'react';
import {connect,useDispatch,useSelector} from 'react-redux'
import styles from './css.module.css'
import star from '../../assets/star.svg'
import favo from '../../assets/fav.svg'

const Music = (props) => {
    const [fav,setFav] = useState(false)
    const favList = useSelector(state => state.favorite)
    const dispatch = useDispatch()
    const time = new Date(props.time * 1000).toISOString().substr(14, 5)
    const item = {
        id: props.key,
        nome: props.music,
        artista: props.artist,
        capa: props.cover,
        tempo: props.time
    }
    function handleFavorite(selecionado){
        setFav(true)
        return{
            type:'HANDLE_FAV',
            item: selecionado
        }
    }
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
                    fav? 
                    <img src={favo}
                        onClick={()=> setFav(false)}
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