import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { type CounterSchema } from 'enitites/Counter'

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
