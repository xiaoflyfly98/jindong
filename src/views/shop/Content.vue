<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': currentTab === item.tab,
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img
          class="product__item__img"
          :src="item.imgUrl"
        />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售 {{ item.sales }} 件</p>
          <div class="product__item__price">
            <span class="product__item__yen">&yen;{{ item.price }}</span>
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </div>
        </div>
        <div class="product__num">
          <span class="product__minus iconfont"
           @click="() => {changeCartItem(shopId, item._id, item,-1,shopName) }"
          >
          &#xe634;</span>

        {{getProductCartCount(shopId, item._id)}}

          <span class="product__plus iconfont"
          @click="() => { changeCartItem(shopId, item._id, item,+1,shopName) }"
          >
          &#xe667;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request"
import { toRefs, reactive, ref, watchEffect } from "vue"
import { useRoute } from "vue-router"
import {usecommonCartEffect} from "../../effects/cartEffects"
import {useStore} from 'vuex'

const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};

const useCurrentListEffect = (currentTab,shopId) => {
  const content = reactive({ list: [] });
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data;
    }
  };
  
  watchEffect(() => {getContentData()});

  const { list } = toRefs(content);
  return { list }; 
};

const useCartEffect =()=>{
  const store = useStore();
  const { cartList, changeCartItemInfo,productList } = usecommonCartEffect()
   const changeShopName =(shopId,shopName)=>{
        store.commit('changeShopName',{shopId,shopName})
    }
    
    const changeCartItem=(shopId,productId,item,num,shopName)=>{
        changeCartItemInfo(shopId,productId,item,num)
        changeShopName(shopId,shopName)
    }

    const getProductCartCount =(shopId,productId)=>{
      return cartList?.[shopId]?.productList?.[productId]?.count || 0
    }
    return {changeShopName,changeCartItem,getProductCartCount,productList}
}

export default {
  name: "Content",
  props:['shopName'],
  setup() {
    const route = useRoute();
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab,shopId);
    const {cartList,changeCartItemInfo}=usecommonCartEffect()
    const {changeShopName,changeCartItem,getProductCartCount}=useCartEffect()

    return { categories, currentTab, handleTabClick, list
    ,cartList, changeCartItem,shopId,changeShopName,changeCartItemInfo,
    getProductCartCount  }
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
  .category {
    overflow-y: scroll;
    height: 100%;
    width: 0.76rem;
    background: #f5f5f5;
    .category__item {
      height: 0.4rem;
      font-size: 14px;
      color: #333333;
      line-height: 0.4rem;
      text-align: center;
      border-radius: 2px;
    }
    .category__item--active {
      background: #fff;
    }
  }
  .product {
    overflow-y: scroll;
    flex: 1;
    .product__item {
      position: relative;
      display: flex;
      border-bottom: 0.01rem solid #F1F1F1;;
      margin: 0 0.16rem;
      padding: 0.12rem 0;

      .product__item__img {
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.16rem;
      }
      .product__item__detail {
        overflow: hidden;
      }
      .product__item__title {
        @include ellipsis;
        margin: 0;
        line-height: 0.2rem;
        font-size: 0.14rem;
        color: #333;
      }
      .product__item__sales {
        margin: 0.06rem 0;
        font-size: 0.12rem;
        color: #333;
      }

      .product__item__price {
        margin: 0;
        line-height: 0.2rem;
        font-size: 0.14rem;
        color: #e93b3b;
        .product__item__yen {
          font-size: 0.12rem;
        }
        .product__item__origin {
          margin-left: 0.06rem;
          line-height: 0.2rem;
          font-size: 0.12rem;
          color: #999;
          text-decoration: line-through;
        }
      }

      .product__num {
        position: absolute;
        right: 0;
        bottom: 0.16rem;
        font-size: 14px;
        line-height: .18rem;
        .product__minus {
          top: .02rem;
          position: relative;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 16px;
          text-align: center;
          font-size: 0.2rem;
          color: #666666;
          margin-right: .05rem;
        }

        .product__plus {
          top: .01rem;
          position: relative;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 16px;
          text-align: center;
          font-size: 0.2rem;
          color: #0091FF;
          margin-left: .05rem;
        }
      }
    }
  }
}
</style>