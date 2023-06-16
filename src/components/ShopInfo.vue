<template>
  <div class="shop">
    <img :src="item.imgUrl" class="shop__item__img" />

    <div 
    :class='{"shop__content":true,"shop__content--bordered": hideBorder ? false: true}'

    >
      <div class="shop__item__title">{{ item.name }}</div>
      <div class="shop__item__tags">
        <span class="shop__content__tag">月售: {{ item.sales }}</span>
        <span class="shop__content__tag">起送: {{ item.expressLimit }}</span>
        <span class="shop__content__tag"
          >基础运费: {{ item.expressPrice }}</span
        >
      </div>

      <div class="shop__item__highlight">{{ item.slogan }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"],
};
</script>

<style lang="scss" scoped>
@import "../style/mixins.scss";
@import "../style/viriables.scss";
.shop {
  padding-top: 0.14rem;
  display: flex;
  right: 0;
  left: 0;

  .shop__item__img {
    padding-bottom: 0.05rem;
    width: 0.56rem;
    height: 0.56rem;
  }

  .shop__content--bordered {
    border-bottom: 1px solid #F1F1F1;;
  }

  .shop__content {
    display: 1;
    margin: 0 0 0rem 0.16rem;
    .shop__item__title {
      font-size: 16px;
      color: $content-fontcolor;
      margin-bottom: 0.08rem;
    }
    .shop__content__tag {
      font-size: 0.13rem;
      padding-right: 0.16rem;
      color: $content-fontcolor;
    }
    .shop__item__highlight {
      margin: 0.12rem 0 0.12rem 0;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>