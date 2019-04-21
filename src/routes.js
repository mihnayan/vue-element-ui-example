import Managers from './components/Managers'
import Manager from './components/Manager'
import Orders from './components/Orders'
import Order from './components/Order'

export default [
  { path: '/managers/:id', component: Managers,
    children: [
      {
        path: '',
        component: Manager
      }
    ]
  },
  { path: '/managers', component: Managers },
  { path: '/orders', component: Orders },
  { path: '/orders/new', component: Order }
]