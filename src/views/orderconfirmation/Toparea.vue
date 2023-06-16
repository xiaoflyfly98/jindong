<template>
  <div class="top">
    <div class="top__header">
      <div class="top__header__back iconfont" @click="handleBack">&#xe606;</div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">瑶妹（先生）</span>
        <span class="top__receiver__info__num">18911024266</span>
      </div>
      <div class="iconfont top__receiver__icon">&#xe642;</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Toparea",
  setup() {
    const router = useRouter();
    const handleBack = () => {
      router.back();
    };
    return { handleBack };
  },
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  .top__header {
    position: relative;
    line-height: 0.22rem;
    padding-top: 0.25rem;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 0.22rem;
    .top__header__back {
      position: absolute;
      font-size: 0.18rem;
      line-height: 0.22rem;
      left: 0.185rem;
    }
  }

  .top__receiver {
    position: absolute; 
    left: 50%;
    transform: translate(-50%,0);
    height: 1.11rem;
    width: 3.339rem;
    background: #ffffff;
    border-radius: 4px;
    .top__receiver__title {
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 16px;
      color: #333333;
      line-height: 0.22rem;
      font-weight: bold;
    }
    .top__receiver__address {
      padding-left: 0.16rem;
      line-height: 0.2rem;
      font-size: 14px;
      color: #333333;
    }
    .top__receiver__info {
      padding: 0.06rem 0 0.16rem 0.16rem;
      font-size: 12px;
      color: #666666;
      line-height: 0.17rem;
    }
    .top__receiver__icon {
      position: absolute;
      top: 48px;
      right: 16px;
      color: #666;
      font-size: 0.2rem;
    }
  }
}
</style>