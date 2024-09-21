import Categories from "../components/UI/Categories";
import Courses from "../components/UI/Courses";
import Favorits from "../components/UI/Favorits";
import Header from "../components/UI/Header";

export default function Home(){
    return (
        <>
            {/* <HamMenu/> */}
            <Header/>
            <Categories/>
            <Favorits/>
            <Courses/>
        </>
    )
}