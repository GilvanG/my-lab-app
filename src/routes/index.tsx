import {
  BrowserRouter,
  Route,
  Routes as ReactRouter,
} from 'react-router-dom';
import { HOC } from '../pages/hoc';
import { RenderProps } from '../pages/renderProps';
import { Home } from '../pages/home';
import { StateReducer } from '../pages/stateReducer';
import { Provider } from '../pages/provider';
import { CompoundComponents } from '../pages/compoundComponents';
import { UncontrolledForm } from '../components/UncontrolledComponents/index';
import { ControlledForm } from '../components/ControlledComponents';
import { PortalPage } from '../pages/Portal';
import { ProfilerInHOC } from '../pages/Profiler';
import { Context } from '../components/Context';
import { CountTL } from '../pages/Test/Count/testLibrary';

const Routes = () => (
  <BrowserRouter>
    <ReactRouter>
      <Route path="/ucc" element={<UncontrolledForm />} />
      <Route path="/cc" element={<ControlledForm />} />
      <Route path="/hoc" element={<HOC />} />
      <Route path="/portal" element={<PortalPage />} />
      <Route path="/profiler" element={<ProfilerInHOC />} />
      <Route path="/context" element={<Context />} />
      <Route path="/render-props" element={<RenderProps />} />
      <Route path="/state-reducer" element={<StateReducer />} />
      <Route path="/provider" element={<Provider />} />
      <Route path="/compound-components" element={<CompoundComponents />} />
      <Route path="/test-count" element={<CountTL />} />
  
      <Route path="/" element={<Home />} />
    </ReactRouter>
  </BrowserRouter>
);

export default Routes;
