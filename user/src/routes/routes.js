import Login from '../components/auth/Login';
import Signup from '../components/auth/SignUp';
import Home from '../components/todo/Home';
import Todo from '../components/todo/Todo'
import { TodoProvider } from '../context/todo/TodoContext';

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/create", element: <TodoProvider><Todo /></TodoProvider> }
]