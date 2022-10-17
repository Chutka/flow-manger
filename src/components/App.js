
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Stepper } from './Stepper';
import { First, Second, Third } from '../containers';
import { FIRST_PATH, SECOND_PATH, THIRD_PATH } from '../constants/paths';

const routes = [{
  path: FIRST_PATH,
  component: First,
  exact: true,
}, {
  path: SECOND_PATH,
  component: Second,
  exact: true,
}, {
  path: THIRD_PATH,
  component: Third,
  exact: true,
}]

const stepperConfig = {
  [FIRST_PATH]: {
    id: FIRST_PATH,
    component: First,
  },
  [SECOND_PATH]: {
    id: SECOND_PATH,
    component: Second,
  },
  [THIRD_PATH]: {
    id: THIRD_PATH,
    component: Third,
  },
};

function App() {
  return (
    <BrowserRouter>
      <Stepper config={stepperConfig}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Stepper>
    </BrowserRouter>
  );
}

export default App;
