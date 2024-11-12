import React,{useState} from 'react'
import './Style.css'
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard.js"

const Food = () => {
    const [menuData, setMenuData] = useState(Menu)
    

    return (
        <div>
            <MenuCard menuData ={menuData}/>
      
        </div>
    )
}

export default Food
