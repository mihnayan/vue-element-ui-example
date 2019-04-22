<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <strong>{{ manager.firstName }} {{ manager.lastName}}</strong>
    </div>
    <div>
      {{ manager.specialization }}
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
    fetchManagerInfo () {
      let id = this.id || this.$store.state.managers.loggedManager;
      this.manager = this.$store.getters.getManagerInfo(id);
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id;
      this.fetchManagerInfo();
    }
  },
  created () {
    this.fetchManagerInfo();
  }
}
</script>
