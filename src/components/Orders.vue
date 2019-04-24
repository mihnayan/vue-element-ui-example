<template>
  <el-table
      :data="orders"
      :default-sort="{prop: 'cost', order: 'descending'}">
    <el-table-column v-if="!managerId" :formatter="managerName" label="Менеджер" sortable></el-table-column>
    <el-table-column prop="id" label="№ заказа"></el-table-column>
    <el-table-column prop="name" label="Заказ" sortable></el-table-column>
    <el-table-column prop="cost" label="Стоимость" sortable></el-table-column>
    <el-table-column prop="status" label="Статус заказа"></el-table-column>
    <el-table-column label="Операции с заказом">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="deleteOrder(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      managerId: null,
      orders: [
        {
          name: '',
          cost: '',
          status: ''
        }
      ]
    }
  },
  methods: {
    managerName (row, column) {
      let manager = this.$store.getters.manager(row.managerId);
      return [manager.firstName, manager.lastName].join(' ');
    },
    updateOrders () {
      if (this.managerId) {
        this.$store.commit('setManagerOrders', this.managerId);
        this.orders = this.$store.state.orders.managerOrders;
      } else {
        this.orders = this.$store.state.orders.allOrders;
      }
    },
    deleteOrder (index, row) {
      this.$store.dispatch('deleteOrder', row.id)
          .then(() => {
            this.updateOrders();
          })
          .catch(error => console.error(error));
    }
  },
  watch: {
    '$route' (to, from) {
      this.managerId = to.params.id;
      this.updateOrders();
    }
  },
  created () {
    this.managerId = this.$route.params.id;
    this.updateOrders();
  }
}
</script>

