import NavBar from './components/Navs/NavBar';
import './Sass/App.scss';
import links from './utils/links';

function App() {
  return (
    <div className="App">
      <NavBar links={links} />
    </div>
  );
}

export default App;
