import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'
import { Theme } from 'shared/context/theme_context/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus ' +
        'turpis in eu mi. Nibh cras pulvinar mattis nunc sed blandit libero. ' +
        'Cras tincidunt lobortis feugiat vivamus at augue eget arcu.'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus ' +
        'turpis in eu mi. Nibh cras pulvinar mattis nunc sed blandit libero. ' +
        'Cras tincidunt lobortis feugiat vivamus at augue eget arcu.'
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
