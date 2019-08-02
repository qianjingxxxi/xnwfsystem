<template>
  <div class="nofoundContainer">
    <section>
      <div>
        <h1>
          SORRY
          <br />您的权限不足无法访问！！
        </h1>
        <p>
          解决方法：
          <br />如有需要，请联系工作人员开通相关权限
        </p>
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
      <img src="../../assets/auth/404.jpg" alt />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nofoundContainer {
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    > div {
      h1 {
        font-size: 32px;
        line-height: 44px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
        margin-top: 12px;
      }
      > div {
        button {
          margin-right: 30px;
        }
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
  }
  > img {
    height: 366px;
  }
}
</style>

