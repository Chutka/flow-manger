import React from 'react';
import { withRouter } from 'react-router-dom';
import { useFlow } from '../components/Flow';
import { SECOND_PATH } from '../constants/paths';

export const First = withRouter(({ history }) => {
    const {
        goNextFlow,
        goBackFlow,
        closeAllFlows,
    } = useFlow();

    return (
        <div>
            <div>First</div>
            <button type="button" onClick={() => history.push(SECOND_PATH)}>Show second by router</button>
            <button type="button" onClick={() => goNextFlow(SECOND_PATH)}>Show second by Stepper</button>
            <button type="button" onClick={goBackFlow}>Show prev is exist by Stepper</button>
            <button type="button" onClick={closeAllFlows}>Close all by stepper</button>
        </div>
    )
});