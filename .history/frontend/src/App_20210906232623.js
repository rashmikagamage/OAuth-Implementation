import Login from './components/login';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    
    <Router>{
      <div>
          <switch>
              <Route path="/login" component={Login}/>
              <Route path="/github" component={Login}/>
          </switch>
      </div>
  }

  </Router>
  );
}

export default App;
