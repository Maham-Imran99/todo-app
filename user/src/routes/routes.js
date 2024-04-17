import LoginPage from '../pages/auth/Login';
import SignUpPage from '../pages/auth/SignUp';
import HomePage from '../pages/todo/Home';
import TodoPage from '../pages/todo/Todo';
import { TodoProvider } from '../context/todo/TodoContext';
import ProtectedRoute from '../components/auth/ProtectedRoute';

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  {
    path: "/todos", element: (
      <TodoProvider>
        <ProtectedRoute>
          <TodoPage />
        </ProtectedRoute>
      </TodoProvider>
    )
  }
]