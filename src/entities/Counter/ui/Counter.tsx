import React from 'react';
import { useDispatch } from 'react-redux';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/deprecated/Button';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid="value-title">value ={counterValue}</h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="increment-btn" onClick={increment}>
                increment
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="decrement-btn" onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};

export default Counter;
