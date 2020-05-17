<template>
  <div class="dashboard-container">
    <div class="dashboard-text">今天是{{formatDate}}，{{ name }}，工作辛苦啦~</div>
    <panel-group />
    <el-row :gutter="10">
      <el-col :span="8" style="margin-top: 30px;">
        <img src="@/assets/dash_images/dash_fly.webp" alt="dash_fly">
      </el-col>
      <el-col :span="16">
        <transaction-table></transaction-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'
import TransactionTable from './components/TransactionTable'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    TransactionTable
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ]),
    formatDate: function () {
      const now = new Date()
      return now.getFullYear().toString() + '年' + (now.getMonth() + 1).toString() + '月' + now.getDate().toString() + '日'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 23px;
    margin-bottom: 30px;
  }
}
</style>
