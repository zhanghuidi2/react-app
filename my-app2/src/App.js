import logo from './logo.svg';
import './App.css';
import ClassComponent from './page/classComponents';
import FunctionComponents from './page/functionComponents';
import SetState from './page/setState';
import HomePage from './page/HomePage';
import StoreComponents from './page/storeComponents';
import PageRedux from './page/pageRedux';
import RouterPage from './page/routerPage';
function App() {
  return (
    <div style={ {height:'100%'} }>
      {/* <ClassComponent />
      <FunctionComponents />
      <SetState /> */}
      {/* <HomePage /> */}
      {/* <StoreComponents /> */}
      {/* <PageRedux /> */}
      <RouterPage />
    </div>
  );
}

export default App;
