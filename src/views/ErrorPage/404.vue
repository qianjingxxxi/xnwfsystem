<template>
  <div class="nofoundContainer">
    <section>
      <div>
        <h1>
          诶呀！
          <span></span>
          <br />页面找不到了！！
        </h1>
        <p>
          可能原因有：
          <br />网站可能在进行维护或出现了程序问题
        </p>
        <div>
          <a-button @click="$router.go(0)">原地复活</a-button>
          <a-button @click="$router.push({name:'login'})" type="primary">返回登录</a-button>
        </div>
      </div>
      <img src="../../assets/auth/404.jpg" alt />
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">

// @import url("../../style/global.less");
</style>

<style lang="less" scoped>
@baseColor: #f938ab;
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
        button:last-child {
          background-color: @baseColor;
          border-color: @baseColor;
        }
      }
    }
  }
  > img {
    height: 366px;
  }
}
</style>

