import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Braindump } from './pages/Braindump';
import { Chatbot } from './pages/Chatbot';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/braindump" element={<Braindump/>}/>
            <Route path="/chatbot" element={<Chatbot/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
