import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('main page')}
        </div>
    );
};

export default MainPage;
