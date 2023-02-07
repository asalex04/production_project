import { useTranslation } from 'react-i18next'
import { Counter } from 'enitites/Counter'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Counter />
            {t('Main')}
        </div>
    )
}

export default MainPage
