import {createStore} from 'redux'
import artista from '../../assets/artist.svg'
import musica from '../../assets/musica.svg'
import album from '../../assets/album.svg'


const buscas= [
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

const initial_state = {
    buscas,
    filter: buscas[1],
    favorite: []
}


function reducer(state = initial_state,action){
    if(action.type == "HANDLE_FILTER"){
        let id = action.filter.id
        if(id == 2){
            return{
                ...state,
                filter: action.buscas[0] 
            }
        }else{
            return{
                ...state,
                filter: action.buscas[id+1] 
            }
        }
    }
    if(action.type == 'HANDLE_FAV'){
        let novo = action.item
        return{
            ...state,
            favorite: [...state.favorite,novo]
        }
    }
    return state
}

const store = createStore(reducer)

export default store