import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import NavBar from './components/Navs/NavBar';
import './Sass/App.scss';
import links from './utils/links';
import Home from './components/Home/Home';
import HomeContainer from './components/Home/HomeContainer';
import Modal from './components/Modal/Modal';
import 'aos/dist/aos.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

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
