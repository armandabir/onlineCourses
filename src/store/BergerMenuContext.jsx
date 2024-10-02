import { createContext } from "react"
import { useState } from "react"

const BergerMenuContext= createContext({
    menuState:false,
    onOpen:()=>{},
    onClose:()=>{}
})
export function BergerMenuContextProvider({children}){
    const [menuState,setMenuState]=useState(false)
    function onOpen(){
        // setMenuOpen
        setMenuState(true)
    }
    function onClose(){
        // setmenuClose
        setMenuState(false)
        console.log(menuState)
    }
    
    const menuContext = {
        menuState,
        onOpen,
        onClose,
    }
    return(<BergerMenuContext.Provider value={menuContext}>{children}</BergerMenuContext.Provider>)
}


export default BergerMenuContext;