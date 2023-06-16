<template>
<div>
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe60b;</span>
    </div>

    <div class="serch">
      <div class="iconfont">
        &#xe672;
        <span class="serch__iconfont">山姆会员商店优惠商品</span>
      </div>
    </div>

    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
    </div>

    <div class="icons">
      <div 
      v-for="item in iconsList"
      class="icons__item"
      :key="item.desc"
      >
        <img
          class="icons__img"
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgname}.png`"
        />
        <p class="icons__img__desc">{{item.desc}}</p>
      </div>

      
    </div>

    <div class="gap"></div>
</div>
</template>

<script>
export default {
  name: "StaticPart",
  setup(){
    const iconsList =[
      {imgname:'超市',desc:'超市便利'},
      {imgname:'菜市场',desc:'菜市场'},
      {imgname:'水果店',desc:'水果店'},
      {imgname:'鲜花',desc:'鲜花绿植'},
      {imgname:'医药健康',desc:'医药健康'},
      {imgname:'家居',desc:'家居时尚'},
      {imgname:'超市',desc:'超市便利'},
      {imgname:'蛋糕',desc:'烘培蛋糕'},
      {imgname:'签到',desc:'签到'},
      {imgname:'大牌免运',desc:'大牌免运'},
    ]
     return { iconsList }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.position {
  position: relative;
  padding: 0.16rem 0.24em 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}

.serch {
  position: relative;
  width: 3.39rem;
  height: 0.32rem;
  font-size: 0.16rem;
  background: #f5f5f5;
  line-height: 16px;
  border-radius: 16px;
  margin-bottom: 0.12rem;
  .iconfont {
    position: absolute;
    padding: 0.08rem 0.12rem 0.08rem 0.16rem;
  }
  .serch__iconfont {
    font-size: 0.14rem;
    color: #b7b7b7;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  .banner__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  .icons__item {
    width: 20%;
  }
  .icons__img {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    margin: 0 auto;
  }

  .icons__img__desc {
    margin: 0.06rem 0 0.16rem 0;
    text-align: center;
    color: $content-fontcolor;
  }
}

.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>