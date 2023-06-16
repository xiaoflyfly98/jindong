<template>
  <div class="wrapper">
    <div class="wrapper__backColor">
      <div class="editMyInfo iconfont">&#xe6f2;</div>
      <div class="editMyHeadImg"></div>
      <div class="myInfoContent">
        <div class="myInfoContent__info">
          <div class="myInfoContent__name">热心市民李先生</div>
          <!-- <span class="myInfoContent__level iconfont">16</span> -->
          <div class="myInfoContent__id">ID: 1069643013</div>
          <div class="myInfoContent__desc">
            <span class="myInfoContent__desc1">红包</span>
            <span class="myInfoContent__desc1">优惠券</span>
            <span class="myInfoContent__desc1">鲜豆</span>
            <span class="myInfoContent__desc1">白条</span>
          </div>
          <div class="myInfoContent__item">
            <div class="myInfoContent__item__info">218</div>
            <div class="myInfoContent__item__info">12张</div>
            <div class="myInfoContent__item__info">88</div>
            <div class="myInfoContent__item__info">1000</div>
          </div>

        </div>
            
      </div>
        <div class="otherBatr">
        <div class="otherBatr__wallet">
        <span class="otherBatr__wallet__icon">&yen;</span>
        我的钱包
        <span class="otherBatr__icon__right iconfont">&#xe642;</span>
        </div>
        <div class="otherBatr__waddress">
        <span class="otherBatr__waddress__icon iconfont">&#xe619;</span>
        我的地址
        <router-link to="/myadress">
        <span class="otherBatr__icon__right iconfont">&#xe642;</span>
        </router-link>
        </div>
        <div class="otherBatr__help">
        <span class="otherBatr__help__icon iconfont">&#xe666;</span>
        客服与帮助
        <span class="otherBatr__icon__right iconfont">&#xe642;</span>
        </div>
        </div>   
    </div>
            
  </div>

  <Docker :currentIndex="3" />
</template>

<script>
import Docker from "../../components/Docker";
export default {
  name: "myInfo",
  components: { Docker },
  setup() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.49rem;
  background: #f1f1f1;
  .wrapper__backColor {
    position: relative;
    border-radius: 0 0 20% 20%;
    height: 2.5rem;
    background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
    .editMyInfo {
      position: absolute;
      color: #ffffff;
      font-size: 0.2rem;
      right: 0.21rem;
      top: 0.405rem;
    }
    .editMyHeadImg {
      z-index: 1;
      position: relative;
      width: 0.94rem;
      height: 0.94rem;
      background: blueviolet;
      border-radius: 50%;
      top: 0.445rem;
      left: 50%;
      transform: translate(-50%);
    }
    .myInfoContent {
      position: absolute;
      width: 3.39rem;
      height: 2.03rem;
      background: #ffffff;
      top: 0.895rem;
      left: 50%;
      transform: translate(-50%);
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      .myInfoContent__info {
        position: relative;
        top: 0.59rem;

        .myInfoContent__name {
          font-size: 24px;
          color: #262628;
          height: 36px;
          text-align: center;
          line-height: 36px;
        }
        .myInfoContent__id {
          font-size: 14px;
          color: #c1c0c9;
          text-align: center;
          line-height: 0.17rem;
          text-align: center;
          margin: 0.02rem 0;
        }
        .myInfoContent__desc {
          display: flex;
          padding: 0.12rem 0 0.03rem 0;
          border-top: 0.01rem solid #f1f1f1;
          .myInfoContent__desc1 {
            flex: 1;
            font-size: 0.12rem;
            color: #c1c0c9;
            text-align: center;
          }
        }
        .myInfoContent__item {
          position: relative;  
          display: flex;
          .myInfoContent__item__info {
            position: relative;
            flex: 1;
            font-size: 20px;
            color: #262628;
            text-align: center;
            line-height: 0.4rem;
          }
        }
      }
    }
    .otherBatr{
        position: relative;
        transform: translate(-50%);
        width: 3.39rem;
        height: 1.46rem;
        top:  2.19rem;
        left: 50%;

        background: #FFFFFF;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
        border-radius: 8px;
        line-height: .2rem;
        font-size: .14rem;
        color: #262626;
        .otherBatr__icon__right{
            padding-left: 2.1rem;
            font-size: .2rem;
            line-height: .18rem;
            vertical-align: middle;
        }
        .otherBatr__wallet{
            padding: .22rem  0 0 .16rem;
            &__icon{
                display: inline-block;
                background: #ED4A47;
                border-radius: .06rem;
                margin-right: .05rem;
                width: .2rem;
                height: .2rem;
                font-size: .16rem;
                color:#FFFFFF;
                text-align: center;
            }

        }
        .otherBatr__waddress{
          a{
            text-decoration: none;
          }
            padding: .22rem  0 0 .16rem;
            .otherBatr__waddress__icon{
            display: inline-block;
            background: #32C5FF;
            border-radius: .06rem;
            margin-right: .05rem;
            width: .2rem;
            height: .2rem;
            font-size: .16rem;
            color:#FFFFFF;
            text-align: center;

            }
        }

        .otherBatr__help{
            padding: .22rem  0 0 .16rem;
            .otherBatr__help__icon{
                display: inline-block;
                background: rgba(144,19,254,0.92);
                border-radius: .06rem;
                margin-right: .05rem;
                width: .2rem;
                height: .2rem;
                font-size: .16rem;
                color:#FFFFFF;
                text-align: center;
            }
             .otherBatr__icon__right{
            vertical-align: middle;
            padding-left: 1.96rem;
            }
        }

        
        }
  }
}
</style>