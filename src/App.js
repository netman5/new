import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/Navs/NavBar';
import './Sass/App.scss';
import links from './utils/links';
import Home from './components/Home/Home';
import HomeContainer from './components/Home/HomeContainer';
import Modal from './components/Modal/Modal';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="App">
      {isOpen && <Modal />}
      <NavBar links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <HomeContainer />
    </div>
  );
}

export default App;
