import React from 'react'
import styles from './css.module.css'
import options from '../../assets/options.svg'
import {connect} from 'react-redux'
import axios from 'axios'

const Search = ({state,dispatch}) =>{
    function handleFilterChange(a,b){
        return {
            type: 'HANDLE_FILTER',
            filter: a,
            buscas: b
        } 
    }

    function listagem(listagem){
        return{
            type: 'LISTAGEM',
            itens: listagem
        }
    }

    
    function handleBusca(conteudo){
        var busca = {
            method: 'GET',
            url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${state.filter.meta}"${conteudo}"`,
            headers: {
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                'x-rapidapi-key': `${process.env.REACT_APP_DEEZER_KEY}`
            }
        }
        axios.request(busca).then(function (response) {
            dispatch(listagem(response.data.data))
            console.log(response)
        }).catch(function (error) {
            console.error(error);
        });
    }
    return(
        <div className={styles.bar}>
        <input id="input"
            onChange={()=>{
                handleBusca(document.getElementById('input').value)
            }}
            placeholder="Buscar musica por ...." 
            type="text" 
            className={styles.default} 
        />
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
