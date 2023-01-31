import './styles/index.scss'
import { useTheme } from 'shared/context'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'

const App = () => {
    const { theme } = useTheme()
    useEffect(() => {
        if (Math.random() < 0.5) {
            console.log('error')
            throw new Error()
        }
    }, [])
    return (
        <div className={classNames('app', {}, [theme!])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
