import Vue from 'vue'
import Vuex from 'vuex'
import managers from './modules/managers'
import orders from './modules/orders'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { managers, orders },
  getters: {
    getAllManagersWithOrders: (state, getters) => {
      return new Promise((resolve, reject) => {
        Promise.all([state.managers.managers, state.orders.orders])
            .then(result => {
              let managers = result[0];
              let orders = result[1];
              let data = managers.map(m => {
                let manager = m;
                manager.orders = orders.filter(o => o.managerId === m.id);
                return manager;
              });
              resolve(data);
            })
      })
    }
  }
})