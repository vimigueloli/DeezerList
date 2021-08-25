import React from 'react'
import styles from './css.module.css'
import { connect, useDispatch, useSelector } from 'react-redux'

const Favorite = (props) =>{
    const dispatch= useDispatch()
    const id = props.id
    function deleteFav(item){
        document.getElementById(id).style.display = 'none';
        return{
            type: 'DELETE',
            item: item
        }
    }


    return(
        <section id={id}>
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
                <div className={styles.delete}
                    onClick={()=>dispatch(deleteFav(props))}
                />
                
            </div>
            <div className={styles.divider}/>
        </section>
    )
}

export default connect(state => ({state: state}))(Favorite)