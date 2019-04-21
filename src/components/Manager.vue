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
  data: function () {
    return {
      manager: null
    }
  },
  methods: {
    fetchManagerInfo: function (id) {
      console.dir(this.$store);
      this.manager = this.$store.getters.getManagerInfo(id);
    }
  },
  watch: {
    '$route' (to, from) {
      this.fetchManagerInfo(to.params.id);
    }
  },
  created: function () {
    this.fetchManagerInfo(this.$route.params.id);
  }
}
</script>
