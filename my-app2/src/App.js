import logo from './logo.svg';
import './App.css';
import ClassComponent from './page/classComponents';
import FunctionComponents from './page/functionComponents';
import SetState from './page/setState';
import HomePage from './page/HomePage';
import ReduxComponents from './page/ReduxComponents';
import ReactRedux1 from './page/ReactRedux1';
import RouterPage from './page/routerPage';
import PureCom from './page/pureCom';
import LifeCycle from './page/lifeCyclePage';
import EffectPage from './page/effectPage';
import UserMemo from './page/useMemo';
import UseCallbackPage from './page/UseCallback';
import ProtalPage from './page/protalPage';
import ReactRedux from './page/ReactRedux';
import ContextCom from './page/ContextComponents';
import RouterPage2 from './page/routerPage2';
import PropsPage from './page/PropsPage';

function App() {
  return (
    <div style={ {height:'100%'} }>
      {/* <ClassComponent /> */}
       {/* <FunctionComponents /> */}
      {/* <SetState /> */}
      {/* <HomePage /> */}
      {/* <ReduxComponents /> */}
      {/* <ReactRedux1 /> */}
      {/* <RouterPage /> */}
      {/* <PureCom /> */}
      {/* <LifeCycle /> */}
      {/* <EffectPage /> */}
      {/* <UserMemo /> */}
      {/* <UseCallbackPage /> */}
      {/* <ProtalPage /> */}
      {/* <ReactRedux /> */}
      {/* <ContextCom /> */}
      <RouterPage2 />
      {/* <PropsPage /> */}
    </div>
  );
}

export default App;
