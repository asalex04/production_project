import { addDecorator } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/context/theme_context/ThemeContext'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

addDecorator(RouteDecorator)
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
