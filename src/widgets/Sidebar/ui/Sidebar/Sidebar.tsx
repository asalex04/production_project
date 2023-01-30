import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwither/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className!])}
        >
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};