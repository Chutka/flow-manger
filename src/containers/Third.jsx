import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStepper } from '../components/Stepper';
import { FIRST_PATH } from '../constants/paths';

export const Third = withRouter(({ history }) => {
    const {
        goNextStep,
        goBackStep,
        closeAllSteps,
    } = useStepper();

    return (
        <div>
            <div>Third</div>
            <button type="button" onClick={() => history.push(FIRST_PATH)}>Show first by router</button>
            <button type="button" onClick={() => goNextStep(FIRST_PATH)}>Show first by Stepper</button>
            <button type="button" onClick={goBackStep}>Show prev is exist by Stepper</button>
            <button type="button" onClick={closeAllSteps}>Close all by stepper</button>
        </div>
    )
});