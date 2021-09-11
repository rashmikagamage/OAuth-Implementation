import Login from './components/login';
import GitHome from './components/git-home';
import TwitterHome from './components/twitter-home';
import LoginGit from './components/login-git';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    
    <Router>{
      <div>
          <switch>
              <Route path="/login" component={Login}/>
              <Route path="/logingit" component={LoginGit}/>
              <Route path="/auth/github/callback" component={GitHome}/>
              <Route path="/twitterHome" component={TwitterHome}/>
            
          </switch>
      </div>
  }

  </Router>
  );
}

export default App;


