<template>
  <div>
    <el-button type="text" v-on:click="logout()">Завершить сеанс</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('logout');
      this.$router.replace('/login');
    }
  },
  created () {
    if (!this.$store.state.managers.loggedManager) {
      this.$router.replace('/login');
    }
  }
}
</script>
