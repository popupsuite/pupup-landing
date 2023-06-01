import WithLayout from 'WithLayout';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import {
  Main as MainLayout
} from './layouts';

import Home from './Home/Home';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={Home}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
