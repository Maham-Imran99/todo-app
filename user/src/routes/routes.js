import Login from '../components/Login';
import Signup from '../components/SignUp';
import Home from '../components/Home';
import Todo from '../components/Todo'

export const routes = [
    {path:"/",element:<Home />},
    {path:"/login",element:<Login />},
    {path:"/signup",element:<Signup />},
    {path: "/create", element:<Todo />}
]