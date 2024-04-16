import { routes } from './routes/routes';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './context/auth/AuthContext';
import { Layout } from './components/common/layout';

function App() {
  const element = useRoutes(routes)
  return (
    <AuthProvider>
      <Layout>
        {element}
      </Layout>
    </AuthProvider>
  );
}

export default App;
