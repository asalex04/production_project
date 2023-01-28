import '../styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "../pages/MainPage/MainPageAsync";
import {Suspense} from "react";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";


const App = () => {
   const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>


    );
};

export default App;