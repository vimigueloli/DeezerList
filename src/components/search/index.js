import React from 'react'
import styles from './css.module.css'

export function Search(){
    return(
        <div className={styles.bar}>
            <a className={styles.default}>
                search...
            </a>
        </div>
    )
}