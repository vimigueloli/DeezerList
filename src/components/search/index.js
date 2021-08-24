import React, { useState } from 'react'
import styles from './css.module.css'
import artista from '../../assets/artist.svg'
import musica from '../../assets/musica.svg'
import album from '../../assets/album.svg'
import options from '../../assets/options.svg'

export function Search(){
    const buscas = [
        {
            id : 0,
            name: 'artista',
            img: artista
        },
        {
            id : 1,
            name: 'musica',
            img: musica
        },
        {
            id : 2,
            name: 'album',
            img: album
        }
    ]
    const [filter,setFilter] = useState(buscas[1])
    function handleFilterChange(){
        let id = filter.id
        if(id == 2){
            setFilter(buscas[0])
        }else{
            setFilter(buscas[id+1])
        }
    }

    return(
        <div className={styles.bar}>
            <input placeholder="Search..." type="text" className={styles.default} />
            <div onClick={()=> handleFilterChange()} className={styles.detail}>
                <a className={styles.filtro}>
                    {filter.name}
                </a>
                <img src={options} alt="options" className={styles.options} />  
                <img src={filter.img} alt="filtro" className={styles.filter} />
            </div>
        </div>
    )
}