import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navs/NavBar';
import './Sass/App.scss';
import links from './utils/links';
import Home from './components/Home/Home';
import HomeContainer from './components/Home/HomeContainer';

function App() {
  return (
    <div className="App">
      <NavBar links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <HomeContainer />
    </div>
  );
}

export default App;
