import { Theme, ThemeUpdater } from '@/src/contexts/theme'
import React,{useContext} from 'react'
import { MdWbSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";

export default function Header(){
    const theme= useContext(Theme)
    const setTheme:any = useContext(ThemeUpdater).update


    return(<div
        className={`
            w-screen h-10 bg-mainGreen fixed text-white      
            line-center
        `}
    >
        <div
            className={`w-full text-xl font-semibold line-center absolute text-${theme.text2} with-transition`}
        >
            Deezer
        </div>
        <div className='line-right w-full pr-4 z-50'>
            {
                theme.dark ?
                <div className='cursor-pointer with-transition text-black hover:text-white'
                    onClick={()=>setTheme({dark:false, changed: true})}
                >
                    <PiMoonStarsFill size='22px'/>
                </div>:
                <div className='cursor-pointer with-transition text-white hover:text-black'
                onClick={()=>setTheme({dark:true, changed: true})}>
                    <MdWbSunny size='22px'/>
                </div>
            }
        </div>
    </div>)
}