import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import Body from './components/Body';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
    
  );
}

export default App;
