import Twitter from './components/twitter';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    
    <Router>{
      <div>
          <switch>
              <Route path="/twitter" component={Twitter}/>
          </switch>
      </div>
  }

  </Router>
  );
}

export default App;
