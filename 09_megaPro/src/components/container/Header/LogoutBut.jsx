import { useDispatch } from "react-redux"
import authService from "../../../appwrite/config"
import { logout } from "../../../store/authSlice"
const LogoutBut = ()=>{
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button>Logout</button>
    )
}
export default LogoutBut