import {Outlet} from "react-router-dom";
import {Header} from "../HeaderComponent/Header";
import {Footer} from "../FooterComponent/Footer";
import styles from './Layout.module.sass';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}