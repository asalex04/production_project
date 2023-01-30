import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'shared/context'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'shared/context/theme_context/ThemeContext'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className!])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
