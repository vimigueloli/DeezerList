import React from 'react'
import styles from './css.module.css'

export function Display(){
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.image}>
                </div>
            </div>
            <div className={styles.buttons}>
                <button>preview</button>
                <button>ouvir</button>
            </div>
        </div>
    )
}