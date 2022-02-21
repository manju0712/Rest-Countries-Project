import React from 'react'
import Switch from "react-switch";
import{ useContext} from "react"
import { ThemeContext } from "../App";
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'

const ThemeToggle = () => {
    const {theme,setTheme} =useContext(ThemeContext);
    const handleThemeToggle =() =>{

        setTheme(theme === "light" ? "dark" : "light" );
    }

  return  <div>
  
          <Switch

        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleThemeToggle}
       
        checked ={theme === "light"}
        />
        <p>
       <Link to ="/Favorites">Favorites
          <FavoriteIcon />
        </Link>
      </p>
    </div>
  
  
}

export default ThemeToggle;
