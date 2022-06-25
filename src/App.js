import NavBar from './components/Navs/NavBar';
import './Sass/App.scss';

function App() {
  const links = [
    { id: '1', path: '/', name: 'Home' },
    { id: '2', path: '/work', name: 'Work' },
    { id: '3', path: '/contact', name: 'Contact' },
  ];

  return (
    <div className="App">
      <NavBar links={links} />
    </div>
  );
}

export default App;
