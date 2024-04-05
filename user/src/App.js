import './App.css';
import NavBar from './components/common/NavBar';
import { routes } from './routes/routes';
import {useRoutes} from 'react-router-dom';
// import Home from './components/Home'
function App() {
 const element = useRoutes(routes)
  return (
    // <Home />
    <div>
      <NavBar />
      {element}
    </div>
  );
}

export default App;
