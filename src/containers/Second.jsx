import React from 'react';
import { withRouter } from 'react-router-dom';
import { useFlow } from '../components/Flow';
import { THIRD_PATH } from '../constants/paths';

export const Second = withRouter(({ history }) => {
    const {
        goNextFlow,
        goBackFlow,
        closeAllFlows,
    } = useFlow();

    return (
        <div>
            <div>Second</div>
            <button type="button" onClick={() => history.push(THIRD_PATH)}>Show third by router</button>
            <button type="button" onClick={() => goNextFlow(THIRD_PATH)}>Show third by Stepper</button>
            <button type="button" onClick={goBackFlow}>Show prev is exist by Stepper</button>
            <button type="button" onClick={closeAllFlows}>Close all by stepper</button>
        </div>
    )
});