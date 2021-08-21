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
                <div>
                    <a className={styles.texto}>OUVIR</a>
                </div>

                <div>
                    <a className={styles.texto}>PREVIEW</a>
                </div>
            </div>
        </div>
    )
}