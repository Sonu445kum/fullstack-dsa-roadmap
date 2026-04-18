import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = ()=>{
    const {user , logout} = useContext(AuthContext);

    return(
       <div>
        {
            user  ? (
                <sapn>
                    {user.name}
                    <button onClick={logout}>Logout</button>
                </sapn>
            ) :(
                <span>
                    Please Login
                </span>
            )
        }
       </div>
    )
}
export default Navbar;