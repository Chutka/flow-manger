import React, { createContext, useCallback, useContext, useState, useRef } from 'react';
import cn from 'classnames';
import './Flow.css';

const FlowContext = createContext({
    steps: [],
    currentStepId: null,

    nextStep: (nextFlowId) => {},
    prevStep: () => {},
    closeAll: () => {},
});

export const Flow = ({ config, children }) => {
    const flowsRef = useRef([]);

    const [flows, setFlows] = useState([]);
    const [currentFlow, setCurrentFlow] = useState(null);

    const goNextFlow = useCallback((nextFlowId) => {
        const nextFlow = config[nextFlowId];
        flowsRef.current.push(nextFlow);

        setFlows(flowsRef.current);
        setCurrentFlow(nextFlow)
    }, [config])

    const goBackFlow = useCallback(() => {
        flowsRef.current.pop();
        setFlows(flowsRef.current);
        const prevFlow = flowsRef.current[flowsRef.current.length - 1];
        setCurrentFlow(prevFlow);
    }, []);

    const closeAllFlows = useCallback(() => {
        flowsRef.current = [];
        setFlows(flowsRef.current);
        setCurrentFlow(null);
    }, []);

    // Let's move here logic with router ?
    return (
        <FlowContext.Provider value={{
            goNextFlow,
            goBackFlow,
            closeAllFlows,
        }} >
            <div className={cn('container', { hidden: !!currentFlow })}>{children}</div>
            {flows.map((flow) => {
                const Component = config[flow.id].component;

                return (
                    <div className={cn('container', { hidden: currentFlow.id !== flow.id})} key={flow.id}>
                        <Component />
                    </div>
                )
            })}
        </FlowContext.Provider>
    );
}

export const useFlow = () => {
    const flow = useContext(FlowContext);
    if (!flow) {
        throw new Error('Do not useFlow outside FlowContext');
    }

    return flow;
}