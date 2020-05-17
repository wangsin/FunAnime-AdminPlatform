<template>
  <div class="components-container">
    <div style="display: flex;flex-direction: row;">
      <aside>分类配置：此处负责配置平台视频分类配置，请使用指定JSON格式。</aside>
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

  const jsonData = '{"category":[{"name":"动漫","key":"anime","sub_category":[{"name":"沙雕配音","key":"shadiao"},{"name":"OVA","key":"ova"}]},{"name":"科技","key":"technology","sub_category":[]}],"search_area":"我爱搜索","config_type":2}'

  export default {
    name: 'CategoryJson',
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

