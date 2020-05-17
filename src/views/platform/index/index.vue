<template>
  <div class="components-container">
    <div style="display: flex;flex-direction: row;">
      <aside>主页配置：此处负责配置主页轮播图和搜索框文字，请使用指定JSON格式。</aside>
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

  const jsonData = '{"carousel_img":[{"image":"f5bcefc53fd9ca8df8c7f583effa50fa","video_id":10},{"image":"36efcb7af804a59267bdd14fe7409862","video_id":11},{"image":"5d88693b5749a36a6750f50d4ad90ee8","video_id":12},{"image":"36efcb7af804a59267bdd14fe7409862","video_id":14}],"search_area":"我爱搜索","config_type":0}'

  export default {
    name: 'RouterJson',
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

