<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <strong>{{ manager.firstName }} {{ manager.lastName}}</strong>
    </div>
    <div>
      <p>
        <strong>Миссия: </strong>{{ manager.specialization }}
      </p>
      <p>
        <strong>Всего заказов: {{ $store.getters.managerOrdersCount(manager.id) }}</strong>
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  props: [
    'id'
  ],
  data: function () {
    return {
      manager: null
    }
  },  
  methods: {
    updateManager () {
      let id = this.id || this.$store.state.managers.loggedManager;
      this.manager = this.$store.getters.manager(id);
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id;
      this.updateManager();
    }
  },
  created () {
    this.updateManager();
  }
}
</script>
