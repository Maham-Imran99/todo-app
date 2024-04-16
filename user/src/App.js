import NavBar from './components/common/NavBar';
import { routes } from './routes/routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider} from './context/auth/AuthContext';

function App() {
  const element = useRoutes(routes)
  return (
   <AuthProvider>
      <NavBar />
      {element}
    </AuthProvider>
  );
}

export default App;
