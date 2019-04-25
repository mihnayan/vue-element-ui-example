import {managersDb, ordersDb} from '../mock_db.js'

export default {
  state: {
    allOrders: [],
    managerOrders: []
  },
  mutations: {
    setOrders (state, orders) {
      state.allOrders = orders;
    },
    setManagerOrders (state, managerId) {
      state.managerOrders = state.allOrders.filter(o => o.managerId === managerId);
    },
  },
  actions: {
    loadOrders (context) {
      const isError = false;
      return new Promise((resolve, reject) => {
        if (isError) reject('error');
        let orders = [];
        for (let key in ordersDb) {
          let order = ordersDb[key];
          order.id = key;
          let manager = managersDb[order.managerId];
          order.managerName = [manager.firstName, manager.lastName].join(' ');
          orders.push(order);
        }
        context.commit('setOrders', orders);
        resolve('orders loaded')
      })
    },
    createOrder (context, order) {
      return new Promise((resolve, reject) => {
        if (!order.managerId) reject('Менеджер не указан!');
        order.status = "Принят к оформлению";
        let iDs = Object.keys(ordersDb);
        let maxId = iDs.reduce((acc, current) => {
          return Math.max(acc, Number.parseInt(current));
        }, 0);
        ordersDb[++maxId] = order;
        return resolve();
      }).then(() => {
        return context.dispatch('loadOrders').then(() => {
          return Promise.resolve(order);
        })
      })
    },
    deleteOrder (context, orderId) {
      const isError = false;
      return new Promise((resolve, reject) => {
        if (isError) reject('error');
        delete ordersDb[orderId];
        return resolve('Order #' + orderId + ' was deleted');
      }).then(() => {
        return context.dispatch('loadOrders');
      });
    }
  },
  getters: {
    managerOrdersCount: state => id => {
      return state.allOrders.filter(o => o.managerId === id).length;
    }
  }
}