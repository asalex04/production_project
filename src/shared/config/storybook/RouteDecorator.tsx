import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import type React from 'react'

export const RouteDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story() as unknown as React.ReactNode}
    </BrowserRouter>
)
