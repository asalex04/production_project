import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";


interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className!])}>
            <div className={cls.links}>
                <AppLink to={'/about'}>{t('About')}</AppLink>
                <AppLink to={'/'} className={cls.mainLink}>{t('Main')}</AppLink>
            </div>
        </div>
    );
};