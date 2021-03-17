import './App.css';
import Login from './Login';
import ChatApplication from './ChatApplication';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/chat_dashboard' component={ChatApplication} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
