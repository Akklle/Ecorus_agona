import React from 'react';
import '../Styles/App.module.sass'
import {Route, Routes} from 'react-router-dom'
import {Layout} from "./Layout/Layout";
import {EcoMarketPage} from "./pages/EcoMarketPage";
import {LogIn} from "./Modal/LogIn";


export const App = () => {
    const [isVisible, setVisible] = React.useState(true);
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/ecoMarket' element={<EcoMarketPage/>}/>
                </Route>
            </Routes>
            <LogIn visible={isVisible} onModalClose={() => setVisible(false)}/>
        </div>

    );
}

