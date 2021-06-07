import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Registered from './components/Registered';
// import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/registered" component={ Registered } />
          <Route path="/register" component={ Register } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
