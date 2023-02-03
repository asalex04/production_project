import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'shared/context/theme_context/ThemeContext'
import { MainPage } from 'pages/MainPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => (
    <MainPage {...(args as typeof MainPage)} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
