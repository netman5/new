import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navs/NavBar';
import './Sass/App.scss';
import links from './utils/links';
import Home from './components/Home/Home';
import HomeContainer from './components/Home/HomeContainer';
// import Works from './components/Works/Works';
// import Blogs from './components/Blogs/Blogs';
// import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/work" element={<Works />} />
        <Route path="/blog" element={<Blogs />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <HomeContainer />
    </div>
  );
}

export default App;
