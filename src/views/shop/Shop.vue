<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe86e;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
  <Content :shopName="item.name" />
  <Cart />
</template>

<script>
import ShopInfo from "../../components/ShopInfo.vue";
import Content from "./Content";
import Cart from "./Cart.vue";
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";


const usegetItemDataEffect = () => {
  const route = useRoute();
  const data = reactive({ item: {} });
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
 
  const {item}= toRefs(data);
  return { getItemData, item };
};

const useBackRouterEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return handleBackClick;
};

export default {
  name: "Shop",
  components: { ShopInfo, Content ,Cart },
  setup() {
    const { getItemData, item } = usegetItemDataEffect();
    const handleBackClick = useBackRouterEffect();

    getItemData();
    return { handleBackClick, item };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem 0.18rem 0.24rem;
}

.search {
  display: flex;
  margin: 0.2rem 0 0 0;
  line-height: 0.32rem;
  .search__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  .search__content {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: 0.16rem;
    .search__content__icon {
      width: 0.44rem;
      text-align: center;
      color: #b7b7b7;
    }
    .search__content__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>