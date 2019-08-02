<template>
  <div class="noNotworkContainer">
    <img src="../../assets/auth/500.jpg" alt />
    <ul>
      <li>
        <a-button @click="hideInPhone=!hideInPhone">技术支持</a-button>
        <a-alert
          class="supportHint"
          message="联系方式"
          description="电话：13023231798  /  邮箱：niemeng@lifeuxuan.com"
          type="info"
          showIcon
          v-if="hideInPhone"
        />
      </li>
      <li>
        <a-button @click="$router.push({name:'login'})" type="primary">返回登录</a-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideInPhone: false
    };
  }
};
</script>

<style lang="less" scoped>
.noNotworkContainer {
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }
  ul {
    position: absolute;
    left: 16%;
    bottom: 30%;
    display: flex;
    flex-direction: row;
    li {
      position: relative;
      margin-left: 10%;

      .supportHint {
        position: absolute;
        width: 300px;
      }
    }
    li:last-child {
      button {
        background-color: #fa5e85;
        border-color: #fa5e85;
      }
    }
  }
}
</style>

