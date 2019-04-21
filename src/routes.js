import Managers from './components/Managers'
import Orders from './components/Orders'
import Order from './components/Order'

export default [
    { path: '/managers', component: Managers },
    { path: '/orders', component: Orders },
    { path: '/orders/new', component: Order }
]