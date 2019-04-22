import Managers from './components/Managers'
import Manager from './components/Manager'
import Orders from './components/Orders'
import Order from './components/Order'
import Login from './components/Login'
import Profile from './components/Profile'

export default [
  { path: '/managers/:id', component: Managers,
    children: [
      {
        path: '',
        component: Manager,
        props: true
      }
    ]
  },
  { path: '/managers', component: Managers },
  { path: '/orders', component: Orders },
  { path: '/orders/new', component: Order },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile,
    children: [
      {
        path: '',
        component: Manager
      }
    ]
  }
]