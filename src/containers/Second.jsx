import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStepper } from '../components/Stepper';
import { THIRD_PATH } from '../constants/paths';

export const Second = withRouter(({ history }) => {
    const {
        goNextStep,
        goBackStep,
        closeAllSteps,
    } = useStepper();

    return (
        <div>
            <div>Second</div>
            <button type="button" onClick={() => history.push(THIRD_PATH)}>Show third by router</button>
            <button type="button" onClick={() => goNextStep(THIRD_PATH)}>Show third by Stepper</button>
            <button type="button" onClick={goBackStep}>Show prev is exist by Stepper</button>
            <button type="button" onClick={closeAllSteps}>Close all by stepper</button>
        </div>
    )
});