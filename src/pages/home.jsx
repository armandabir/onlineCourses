import Categories from "../components/UI/Categories";
import Comments from "../components/UI/comments";
import Courses from "../components/UI/Courses";
import Favorits from "../components/UI/Favorits";
import Features from "../components/UI/Features";
import Header from "../components/UI/Header";
import Masters from "../components/UI/Masters";
import Footer from "../components/UI/Footer";
import HamMenu from "../components/UI/HamMenu";
import menuContext from "../store/BergerMenuContext";
import { useContext } from "react";
export default function Home(){
    const {menuState}=useContext(menuContext)
    console.log(menuState)
    return (
        <>
            {
                (menuState) && (<HamMenu/>)
            }
 
            <Header/>
            <Categories/>
            <Favorits/>
            <Courses/>
            <Masters/>
            <Features/>
            <Comments/>
            <Footer/>
        </>
    )
}