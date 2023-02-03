import { type Story } from '@storybook/react'
import { type Theme } from 'shared/context/theme_context/ThemeContext'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    // <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
    // </ThemeProvider>
)
