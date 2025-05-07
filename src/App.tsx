import { JSX } from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Work';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
