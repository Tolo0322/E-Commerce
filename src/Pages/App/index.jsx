
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../components/NavBar'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'


import './App.css'
import { ShoppingCartProvider } from '../../context'

const AppRoutes = () => {
  let routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/My-account', element: <MyAccount />},
      {path: '/my-order', element: <MyOrder />},
      {path: '/my-orders', element: <MyOrders />},
      {path: '/sign-in', element: <SignIn />},
      {path: '/*', element: <NotFound />},

    
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
      
  )
}

export default App;
