import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
function Layout(){
    return(
        <>
        <Header></Header>
        <Outlet></Outlet> 
        <Footer></Footer>
        </>
    )
}
export default Layout;
