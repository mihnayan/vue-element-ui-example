<template>
  <el-table
      :data="orders"
      :default-sort="{prop: 'cost', order: 'descending'}">
    <el-table-column prop="name" label="Заказ" sortable></el-table-column>
    <el-table-column prop="cost" label="Стоимость" sortable></el-table-column>
    <el-table-column prop="status" label="Статус заказа"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data: function () {
    return {
      orders: null
    }
  },
  created: function () {
    this.orders = this.$store.state.orders.orders;
  }
}
</script>

