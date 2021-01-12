import './App.css';
import Nominate from './Nomitate'
import Landing from './Landing'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
      <Router>
        <Route path="/" exact component={Landing}/>
        <Route path="/nominate" component={Nominate}/>
      </Router>
  );
}

export default App;
