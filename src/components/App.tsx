import React from 'react';
import '../defaultFiles/App.module.sass'
import {Header} from "./HeaderComponent/Header";
import {EcoMarket} from "./EcoMarketPage/MainComponent/EcoMarket";
import {Footer} from "./FooterComponent/Footer";


function App() {
    return (
        <div>
            <Header/>
            <EcoMarket/>
            <Footer/>
        </div>
    );
}

export default App;
