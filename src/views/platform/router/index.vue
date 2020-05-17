<template>
  <div class="components-container">
    <div style="display: flex;flex-direction: row;">
      <aside>页签配置：此处负责配置主页页签整体配置，请使用指定JSON格式。</aside>
      <div style="margin-left:15px;margin-top:4px;">
        <el-button v-waves class="filter-item" type="primary">
          提交
        </el-button>
        <el-button v-waves class="filter-item" type="primary">
          格式化
        </el-button>
      </div>
    </div>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value" />
    </div>
  </div>
</template>

<script>
  import JsonEditor from '@/components/JsonEditor'

  const jsonData = '{"head_router":[{"title":"主页","router":"/"}],"config_type":1}'

  export default {
    name: 'IndexJson',
    components: { JsonEditor },
    data() {
      return {
        value: JSON.parse(jsonData)
      }
    }
  }
</script>

<style scoped>
  .editor-container{
    position: relative;
    height: 100%;
  }
</style>

