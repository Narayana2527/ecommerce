import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Login from '../components/loginPage'
// import ProtectedRoute from '../components/logintohome'
const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'',
                element:<Home />
                // element: (
                // <ProtectedRoute isLoggedIn={isLoggedIn}>
                //     <Home />
                // </ProtectedRoute>)
            },
            {
                path:"login",
                element:<Login />
            }
        ]
    }
])
 export default router