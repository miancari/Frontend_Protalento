import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Layout() {
    return <>
        <header></header>
        
        <main>
            <SideBar></SideBar> 
            <Outlet></Outlet>
        </main>
        <footer></footer>
    </>
};