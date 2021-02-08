import logo from './logo.svg';
import './App.css';
import ClassComponent from './page/classComponents';
import FunctionComponents from './page/functionComponents';
import SetState from './page/setState';
import HomePage from './page/HomePage';
import StoreComponents from './page/storeComponents';
import PageRedux from './page/pageRedux';
import RouterPage from './page/routerPage';
import PureCom from './page/pureCom';
import LifeCycle from './page/lifeCyclePage';
import EffectPage from './page/effectPage';

function App() {
  return (
    <div style={ {height:'100%'} }>
      {/* <ClassComponent />
      <FunctionComponents />
      <SetState /> */}
      {/* <HomePage /> */}
      {/* <StoreComponents /> */}
      {/* <PageRedux /> */}
      {/* <RouterPage /> */}
      {/* <PureCom /> */}
      {/* <LifeCycle /> */}
      <EffectPage />
    </div>
  );
}

export default App;
