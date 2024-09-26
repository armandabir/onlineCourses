import Categories from "../components/UI/Categories";
import Comments from "../components/UI/comments";
import Courses from "../components/UI/Courses";
import Favorits from "../components/UI/Favorits";
import Features from "../components/UI/Features";
import Header from "../components/UI/Header";
import Masters from "../components/UI/Masters";
import Footer from "../components/UI/Footer";
import HamMenu from "../components/UI/HamMenu";
export default function Home(){
    return (
        <>
            <HamMenu/>
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