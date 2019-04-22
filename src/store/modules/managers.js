export default {
  state: {
    managers: [
      {
        id: "1",
        firstName: "Илья",
        lastName: "Муромец",
        specialization: "Защита города Муром"
      },
      {
        id: "2",
        firstName: "Алеша",
        lastName: "Попович",
        specialization: "Защищать слабых"
      },
      {
        id: "3",
        firstName: "Добрыня",
        lastName: "Никитич",
        specialization: "Защищать слабых, помогать бедным"
      },
      {
        id: "4",
        firstName: "Соловей",
        lastName: "Разбойник",
        specialization: "Грабить всех подряд на дороге"
      }
    ],
    loggedManager: null
  },
  mutations: {
    login (state, managerId) {
      state.loggedManager = managerId;
    },
    logout (state) {
      state.loggedManager = null;
    }
  },
  actions: {

  },
  getters: {
    getManagerInfo: state => id => {
      return state.managers.find(v => {
        return v.id == id;
      });
    }
  }
}