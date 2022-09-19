import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'} >Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
            <button onClick={toggleTheme}>
                Сменить тему
            </button>
        </div>
    );
};

export default App;