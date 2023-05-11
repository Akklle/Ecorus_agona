import {Outlet} from "react-router-dom";
import {Header} from "../HeaderComponent/Header";
import {Footer} from "../FooterComponent/Footer";

export const Layout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}