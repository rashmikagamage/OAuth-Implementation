import Login from './components/login';
import GitHome from './components/git-home';
import TwitterHome from './components/twitter-home';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import LinkdelinHome from './components/linkdelin-home';
import LinkdinMessaging from './components/linkdin-messaging';
import SimpleMap from './components/google_maps';

function App() {
  return (
    
    <Router>{
      <div>
          <switch>
              <Route path="/login" component={Login}/>
              <Route path="/auth/github/callback" component={GitHome}/>
              <Route path="/linkdinHome" component={LinkdelinHome}/>
              <Route path="/linkdin/Messaging" component={LinkdinMessaging}/>
              <Route path="/googleMap" component={SimpleMap}/>
          </switch>
      </div>
  }

  </Router>
  );
}

export default App;
