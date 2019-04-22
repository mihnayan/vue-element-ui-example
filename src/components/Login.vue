<template>
  <el-select placeholder="Выбрать пользователя" v-model="managerId">
    <el-option
      v-for="manager in $store.state.managers.managers"
      :key="manager.id"
      :label="manager.firstName + ' ' + manager.lastName"
      :value="manager.id">
    </el-option>
  </el-select>
</template>

<script>
export default {
  data () {
    return {
      managerId: ''
    }
  },
  watch: {
    'managerId' (value) {
      this.$store.commit('login', value);
    }
  }
}
</script>

