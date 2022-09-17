import React, {Suspense} from 'react';
import {Counter} from "./components/Counter/Counter";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'} >Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter />
            <button onClick={toggleTheme}>
                Сменить тему
            </button>
        </div>
    );
};

export default App;