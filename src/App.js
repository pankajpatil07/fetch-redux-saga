import './App.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import User from './components/user/components/user';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User/>
      </div>
    </Provider>
  );
}

export default App;
