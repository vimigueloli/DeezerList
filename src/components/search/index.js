import React from 'react'
import styles from './css.module.css'
import options from '../../assets/options.svg'
import {connect} from 'react-redux'

const Search = ({state,dispatch}) =>{
    function handleFilterChange(a,b){
        return {
            type: 'HANDLE_FILTER',
            filter: a,
            buscas: b
        } 
    }
    return(
        <div className={styles.bar}>
        <input placeholder="Search..." type="text" className={styles.default} />
        <div onClick={()=> dispatch(handleFilterChange(state.filter, state.buscas))} className={styles.detail}>
            <a className={styles.filtro}>
                {state.filter.name}
            </a>
            <img src={options} alt="options" className={styles.options} />  
            <img src={state.filter.img} alt="filtro" className={styles.filter} />
    </div>
    </div>
    )
}
    

export default connect(state => ({state: state}))(Search)
