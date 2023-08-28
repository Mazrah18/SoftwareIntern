import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Maincontent from './content';
import Nopage from './404';

function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Maincontent />} />
        <Route path="/development" element={<Nopage />} />
      </Routes>
    </Router>



    </div>
  );
}

export default App;
