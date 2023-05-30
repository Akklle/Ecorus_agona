import React from 'react';
import '../Styles/App.module.sass'
import {Route, Routes} from 'react-router-dom'
import {Layout} from "./Layout/Layout";
import {EcoMarketPage} from "./pages/EcoMarketPage";
import {LogIn} from "./Modal/LogIn";
import {MainPage} from "./pages/MainPage";
import {PersonalAccount} from "./PersonalAccount/PersonalAccount";
import {PersonalAccountPage} from "./pages/PersonalAccountPage";


export const App = () => {
    const [isVisible, setVisible] = React.useState(true);
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/personal-account' element={<PersonalAccountPage/>}/>
                    <Route path='/ecoMarket' element={<EcoMarketPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/personal-account' element={<PersonalAccount/>}/>
                </Route>
            </Routes>
            <LogIn visible={isVisible} onModalClose={() => setVisible(false)}/>
        </div>

    );
}

