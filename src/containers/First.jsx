import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStepper } from '../components/Stepper';
import { SECOND_PATH } from '../constants/paths';

export const First = withRouter(({ history }) => {
    const {
        goNextStep,
        goBackStep,
        closeAllSteps,
    } = useStepper();

    return (
        <div>
            <div>First</div>
            <button type="button" onClick={() => history.push(SECOND_PATH)}>Show second by router</button>
            <button type="button" onClick={() => goNextStep(SECOND_PATH)}>Show second by Stepper</button>
            <button type="button" onClick={goBackStep}>Show prev is exist by Stepper</button>
            <button type="button" onClick={closeAllSteps}>Close all by stepper</button>
        </div>
    )
});