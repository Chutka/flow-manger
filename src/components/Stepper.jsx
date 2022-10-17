import React, { createContext, useCallback, useContext, useState, useRef } from 'react';
import cn from 'classnames';
import './Stepper.css';

const StepperContext = createContext({
    steps: [],
    currentStepId: null,

    nextStep: (nextStepId) => {},
    prevStep: () => {},
    closeAll: () => {},
});

export const Stepper = ({ config, children }) => {
    const stepsRef = useRef([]);

    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(null);

    const goNextStep = useCallback((nextStepId) => {
        const nextStep = config[nextStepId];
        stepsRef.current.push(nextStep);

        setSteps(stepsRef.current);
        setCurrentStep(nextStep)
    }, [config])

    const goBackStep = useCallback(() => {
        stepsRef.current.pop();
        setSteps(stepsRef.current);
        const prevStep = stepsRef.current[stepsRef.current.length - 1];
        setCurrentStep(prevStep);
    }, []);

    const closeAllSteps = useCallback(() => {
        stepsRef.current = [];
        setSteps(stepsRef.current);
        setCurrentStep(null);
    }, []);

    // Let's move here logic with router ?
    return (
        <StepperContext.Provider value={{
            goNextStep,
            goBackStep,
            closeAllSteps,
        }} >
            <div className={cn('step-container', { hidden: !!currentStep })}>{children}</div>
            {steps.map((step) => {
                const Component = config[step.id].component;

                return (
                    <div className={cn('step-container', { hidden: currentStep.id !== step.id})} key={step.id}>
                        <Component />
                    </div>
                )
            })}
        </StepperContext.Provider>
    );
}

export const useStepper = () => {
    const stepper = useContext(StepperContext);
    if (!stepper) {
        throw new Error('Do not useStepper outside StepperContext');
    }

    return stepper;
}