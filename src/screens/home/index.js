import React, {useState, useEffect} from 'react'
import { Display } from '../../components/display'
import { Favorite } from '../../components/favorite'
import  Music  from '../../components/music'
import Search  from '../../components/search'
import styles from './css.module.css'
import logo from '../../assets/Logotype/DIGITAL RGB/SVG/Deezer_Logo_RVB_MonoWhite.svg'
import axios from 'axios'
import starM from '../../assets/star-menu.svg'
import favM from '../../assets/fav-menu.svg'
import { connect, useDispatch, useSelector, } from 'react-redux'

const Home = () =>{
    
    const search = useSelector(state => state.search)
    const favMenu = useSelector(state => state.favMenu)
    const favorites = useSelector(state => state.favorite)
    const playlist = useSelector(state => state.list)
    const dispatch = useDispatch() 
    const [selected,setSelected] = useState([])

    let exemplo = [
        {
            name: 'obj1',
            id: 1
        },
        {
            name: 'obj2',
            id: 2
        }
    ]

    function completeObjects(arrayObj){
        let cont = 0 
        arrayObj.map(item =>{
            item.ordem= cont
            item.fav= false
            cont++
            return item;
        })
    }
    

    function handleFavMenu(){
        if(favMenu == false){
            return{
                type: 'HANDLE_MENU',
                new: true
            }
        }else{
            return{
                type: 'HANDLE_MENU',
                new: false
            }
        }
    }
    function listagem(listagem){
        return{
            type: 'LISTAGEM',
            itens: listagem
        }
    }
    
    useEffect(() => {
        var top = {
            method: 'GET',
            url: `https://deezerdevs-deezer.p.rapidapi.com/${search}`,
            headers: {
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                'x-rapidapi-key': `${process.env.REACT_APP_DEEZER_KEY}`
            }
        }
        axios.request(top).then(function (response) {
            let completeList = response.data.tracks.data
            completeObjects(completeList)
            dispatch(listagem(completeList))
        }).catch(function (error) {
            console.error(error);
        });

        

    },[])

    return(
        <section>
            <div className ={styles.header}>
                <img src={logo} atlt="logo" className={styles.logo} />
            </div>
            <div className={styles.content}>
                <div className={styles.display}> 
                    {
                        selected.album ?
                        <Display ouvir={selected.link} prev={selected.preview} cover={selected.album.cover_big}/> :
                        <Display />
                    }
                    
                    
                </div>
                <div className={styles.list}>
                    {
                        favMenu ?
                            <div className={styles.listHeader}>
                                <img src={favM} 
                                    onClick={()=> dispatch(handleFavMenu())}
                                    atlt="star" 
                                    className={styles.fav} 
                                />
                            </div> :
                            <div className={styles.listHeader}>
                                <Search />
                                <img src={starM}
                                    onClick={()=> dispatch(handleFavMenu())} 
                                    atlt="star" 
                                    className={styles.fav} 
                                />
                            </div>
                    }
                        
                    <div className={styles.lista}>
                        {   
                            favMenu?
                            favorites.map(response => <Favorite 
                                
                                cover={response.cover} 
                                time={response.time} 
                                key={response.id} 
                                id={response.id}
                                music={response.music} 
                                artist={response.artist}
                            />):
                            playlist.map(response => <Music 
                                onClick={()=>{
                                        setSelected([])
                                        setSelected(response)
                                }}
                                cover={response.album.cover} 
                                time={response.duration} 
                                key={response.id} 
                                id={response.id}
                                music={response.title} 
                                ordem={response.ordem} 
                                artist={response.artist.name}
                            />)
                        }
                        <div className={styles.end} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default connect(state => ({buscas: state.buscas}))(Home)