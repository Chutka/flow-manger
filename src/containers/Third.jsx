import React from 'react';
import { withRouter } from 'react-router-dom';
import { useFlow } from '../components/Flow';
import { FIRST_PATH } from '../constants/paths';

export const Third = withRouter(({ history }) => {
    const {
        goNextFlow,
        goBackFlow,
        closeAllFlows,
    } = useFlow();

    return (
        <div>
            <div>Third</div>
            <button type="button" onClick={() => history.push(FIRST_PATH)}>Show first by router</button>
            <button type="button" onClick={() => goNextFlow(FIRST_PATH)}>Show first by Stepper</button>
            <button type="button" onClick={goBackFlow}>Show prev is exist by Stepper</button>
            <button type="button" onClick={closeAllFlows}>Close all by stepper</button>
        </div>
    )
});