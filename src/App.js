import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navs/NavBar';
import './Sass/App.scss';
import links from './utils/links';

function App() {
  return (
    <div className="App">
      <NavBar links={links} />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/work" element={<h1>Work</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App;
