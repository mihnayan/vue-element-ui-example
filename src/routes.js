import Manager from './components/Manager'
import Orders from './components/Orders'
import Order from './components/Order'

export default [
    { path: '/managers', component: Manager },
    { path: '/orders', component: Orders },
    { path: '/orders/new', component: Order }
]