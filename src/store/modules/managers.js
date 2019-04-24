import {managersDb} from '../mock_db.js'

export default {
  state: {
    allManagers: [],
    loggedManager: null
  },
  mutations: {
    setManagers (state, managers) {
      state.allManagers = managers;
    },
    login (state, managerId) {
      state.loggedManager = managerId;
    },
    logout (state) {
      state.loggedManager = null;
    }
  },
  actions: {
    loadManagers (context) {
      const isError = false;
      return new Promise((resolve, reject) => {
        if (isError) reject('error');
        let managers = [];
        for (let key in managersDb) {
          let manager = managersDb[key];
          manager.id = key;
          managers.push(manager);
        }
        context.commit('setManagers', managers);
        resolve('managers loaded')
      })
    }
  },
  getters: {
    manager: state => id => {
      return state.allManagers.find(v => v.id == id);
    },
    loggedManager: state => {
      return state.loggedManager;
    }
  }
}