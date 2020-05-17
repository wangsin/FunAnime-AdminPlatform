<template>
  <el-table :data="list" style="width: 100%;">
    <el-table-column label="待审批视频" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="作者" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.username | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="类型" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="100" align="center">
      <template slot-scope="{row}">
        <el-button type="text">跳转</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
