import NavBar from './components/common/NavBar';
import { routes } from './routes/routes';
import { useRoutes } from 'react-router-dom';
function App() {
  const element = useRoutes(routes)
  return (
    <>
      <NavBar />
      {element}
    </>
  );
}

export default App;
