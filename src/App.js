import { Provider } from 'react-redux'
import './App.css';
import CakeContainer from './component/CakeContainer'
import IceCreamContainer from './component/iceCreamContainer'
import CakeContainerHooks from './component/CakeContainerHooks'
import InputCakeContainer from './component/InputCakeContainer'
import ItemContainer from './component/ItemContainer'
import UserContainer from './component/UserContainer'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer />
      <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <IceCreamContainer />
      <CakeContainerHooks />
      <InputCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
