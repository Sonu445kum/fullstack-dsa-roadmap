import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const Home =()=>{
    const {theme,setTheme} = useContext(ThemeContext);
    return(
        <div style={{background:theme === "light" ? "#fff" : "#000"}}>
            <button onClick={()=> setTheme(theme === "light" ? "dark" :"light")}>Toggle Theme</button>
        </div>
    )
}
export default Home;