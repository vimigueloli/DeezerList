import {createStore} from 'redux'
import axios from 'axios'
import artista from '../../assets/artist.svg'
import musica from '../../assets/musica.svg'
import album from '../../assets/album.svg'


const buscas= [
    {
        id : 0,
        name: 'artista',
        meta: 'artist:',
        img: artista
    },
    {
        id : 1,
        name: 'musica',
        meta: 'track:',
        img: musica
    },
    {
        id : 2,
        name: 'album',
        meta: 'album:',
        img: album
    }
]

let lista = []

var top = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842`,
    headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.REACT_APP_DEEZER_KEY}`
    }
}
axios.request(top).then(function (response) {
    lista = response.data.tracks.data;
}).catch(function (error) {
    console.error(error);
});

const initial_state = {
    buscas,
    filter: buscas[1],
    favorite: [],
    favCont: 0,
    search: 'playlist/3155776842',
    favMenu: false,
    list: lista
}


function reducer(state = initial_state,action){
    if(action.type == "HANDLE_FILTER"){
        let id = action.filter.id
        console.log(state)
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
        let content = state.list
        let newCont = action.item.cont + 1
        for(let i=0; i < state.list.length ; i++){
            if(state.list[i].id == action.item.id){
                content[i].fav = true
            }
        }
        return{
            ...state,
            favorite: [...state.favorite,novo],
            list: content,
            favCont: newCont 
        }
    }
    if(action.type == 'HANDLE_MENU'){
        return{
            ...state,
            favMenu: action.new
        }
    }
    if(action.type == 'LISTAGEM'){
        let listagem = action.itens
        //console.log(listagem)
        return{
            ...state,
            list: [...listagem]
        }
    }
    return state
}

const store = createStore(reducer)

export default store