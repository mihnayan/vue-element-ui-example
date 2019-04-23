<template>
  <div>
    <h2>Оформление заказа</h2>
    <el-alert
        v-if="!$store.getters.loggedManager"
        type="warning"
        title="Для оформления заказа необходимо войти в Систему">
    </el-alert>
    <el-form v-else>
      <el-form-item label="Услуга / Наименование товара">
        <el-input v-model="order.name"></el-input>
      </el-form-item>
      <el-form-item label="Желаемая стоимость оплаты">
        <el-input-number
            v-model="order.cost"
            :step="10"
            :precision="2"
            :min="10"
            :max="100000">
        </el-input-number>
      </el-form-item>
      <el-button type="primary" v-on:click="createOrder()">Оформить</el-button>
      <el-button type="text" v-on:click="clearForm()">Отменить изменения</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        name: '',
        cost: 100
      }
    }
  },
  methods: {
    createOrder () {
      let managerId = this.$store.getters.loggedManager;
      this.order.managerId = managerId;
      this.$store.dispatch('createOrder', this.order)
          .then(order => {
            this.clearForm();
            this.successfullyCreated(order);
          })
          .catch(error => {
            console.log(error);
          })
    },
    clearForm () {
      this.order = {
        name: '',
        cost: 100
      }
    },
    successfullyCreated (order) {
      let text = [
        'Заказ "', order.name, '" стоимостью ', order.cost, ' успешно создан'
      ].join('');
      this.$alert(text, 'Оформление заказа', {
        confirmButtonText: 'OK'
      })
    }
  }
}
</script>
