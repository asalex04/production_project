import { type Story } from '@storybook/react'
import { type Theme } from 'shared/context/theme_context/ThemeContext'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)
