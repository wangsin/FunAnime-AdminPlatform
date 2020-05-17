<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-tooltip effect="dark" content="外部系统总注册用户，不包括黑名单用户" placement="bottom">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-icon-wrapper icon-color">
            <svg-icon icon-class="users_dash" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              用户
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-tooltip>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-tooltip effect="dark" content="平台总生效视频数，不包含审核中、审核失败、隐藏和删除的视频" placement="bottom">
        <div class="card-panel" @click="handleSetLineChartData('messages')">
          <div class="card-panel-icon-wrapper icon-color">
            <svg-icon icon-class="video_dash" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              视频
            </div>
            <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
          </div>
        </div>
      </el-tooltip>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-tooltip effect="dark" content="平台总生效评论数" placement="bottom">
        <div class="card-panel" @click="handleSetLineChartData('purchases')">
          <div class="card-panel-icon-wrapper icon-color">
            <svg-icon icon-class="comment" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              评论
            </div>
            <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
          </div>
        </div>
      </el-tooltip>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-tooltip effect="dark" content="平台总生效弹幕数" placement="bottom">
        <div class="card-panel" @click="handleSetLineChartData('shoppings')">
          <div class="card-panel-icon-wrapper icon-color">
            <svg-icon icon-class="barrage" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              弹幕
            </div>
            <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
          </div>
        </div>
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<script>
  import CountTo from 'vue-count-to'

  export default {
    components: {
      CountTo
    },
    methods: {
      handleSetLineChartData(type) {
        this.$emit('handleSetLineChartData', type)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .panel-group {
    margin-top: 18px;

    .card-panel-col {
      margin-bottom: 32px;
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);

      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-color {
          background: #f2f2f2;
        }
      }

      .icon-color {
        color: #36a3f7;
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .card-panel-icon {
        float: left;
        font-size: 48px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width:550px) {
    .card-panel-description {
      display: none;
    }

    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;

      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }
</style>
