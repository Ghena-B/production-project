import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid="value-title">
                value =
                {counterValue}
            </h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="increment-btn" onClick={increment}>increment</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="decrement-btn" onClick={decrement}>decrement</Button>
        </div>
    );
};

export default Counter;
