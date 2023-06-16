<template>
<div class="mask" 
v-if="showCart && calculations.total>0"
 @click="handleCartShowChange"
/>
  <div class="cart">
      <div class="porduct__header" v-if="showCart && calculations.total>0">
        <div class="product__header__all">
        <span class="product__header__icon iconfont"
        v-html="calculations.allChecked?'&#xe601;':'&#xe66c;'"
        @click="()=>setCartItemsChecked(shopId)"
        ></span>
        全选
        </div>
        <div>
        <span  class="product__header__clear" @click="()=>cleanCartProducts(shopId)"> 清空购物车</span>
       </div>
      </div>
      <div class="product" v-if="showCart">
      <template 
      v-for="item in productList" 
      :key="item._id">
      <div class="product__item" >
        <div class="product__checked iconfont"
        v-html="item.check? '&#xe601;': '&#xe66c;'"
        @click="()=>changeCartItemChecked(shopId,item._id)"
        ></div> 
        <img
          class="product__item__img"
          :src="item.imgUrl"
        />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <div class="product__item__price">
            <span class="product__item__yen">&yen;{{ item.price }}</span>
            <span class="product__item__origin">&yen;{{ item.oldPrices }}</span>
          </div>
        </div>
        <div class="product__num">
          <span class="product__minus iconfont"
           @click="() => { changeCartItemInfo(shopId, item._id, item,-1) }"
          >
          &#xe634;</span>
          {{item.count||0}}
          <span class="product__plus iconfont"
          @click="() => { changeCartItemInfo(shopId, item._id, item,+1) }"
          >
          &#xe667;</span>
        </div>
        </div>
        </template>
      
      
    </div>

    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          @click="handleCartShowChange"
        />
        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>

      <div class="check__info">
        总计: <span class="check__info__price">&yen;{{ calculations.price }}</span>
      </div>
      <div class="check__btn" v-show=" calculations.total>0">
      <router-link :to="{path:`/orderconfirmation/${shopId}`}"> 去结算  </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref} from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import {usecommonCartEffect} from "../../effects/cartEffects"

const useCartEffect = (shopId) => {
  const store = useStore();
  const {calculations,productList, changeCartItemInfo,}=usecommonCartEffect(shopId)
  
  const changeCartItemChecked=(shopId,productId)=>{
    store.commit('changeCartItemChecked',{shopId,productId})
  }

  const cleanCartProducts=(shopId)=>{
    store.commit('cleanCartProducts',{shopId})
  }

  const setCartItemsChecked=(shopId)=>{
    store.commit('setCartItemsChecked',{shopId})
  }

  return {calculations, productList, changeCartItemInfo,
  changeCartItemChecked,cleanCartProducts,setCartItemsChecked};
};        

const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value;
  }
  return { showCart, handleCartShowChange}
}

export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const {
    calculations, productList, cleanCartProducts,
      changeCartItemInfo, changeCartItemChecked, setCartItemsChecked
    }=useCartEffect(shopId);

    const {showCart, handleCartShowChange}=toggleCartEffect()

    return {
   calculations, shopId, productList, cleanCartProducts,
      changeCartItemInfo, changeCartItemChecked,
      setCartItemsChecked, showCart, handleCartShowChange
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background:#FFFFFF;
  z-index: 2;
.porduct__header{
  display: flex;
  height: .52rem;
  background: #FFFFFF;
  border-bottom: 1px solid #F1F1F1;
  .product__header__all{
    flex: 1;
    line-height: .52rem;
    font-size: 14px;
    color: #333333;
    .product__header__icon{
      vertical-align: top;
      font-size: .20rem;
      padding-left: .16rem;
      padding-right: .044rem;
      color: #0091FF;
      line-height: .52rem;
    }
  }
  .product__header__clear{
    flex: 1;
    display: inline-block;
    padding-right: .18rem;
    line-height: .50rem;
    color: #333333;
    text-align: right;
    font-size: 14px;
  }

}

 .product {
    background: #FFFFFF;
    overflow-y: scroll;
    flex: 1;
    .product__item {
      position: relative;
      display: flex;
      margin: 0 0.16rem;
      padding: 0.12rem 0;
    .product__checked{
      line-height: .5rem;
      font-size: .2rem;
      margin-right: .1rem;
      color: #0091FF;
    }
      .product__item__img {
        width: 0.46rem;
        height: 0.46rem;
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
        padding-bottom: 0.06rem;
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
        .product__minus {
          position: relative;
          top: .02rem;
          line-height: .5rem;
          font-size: 0.2rem;
          color: #666666;
          margin-right: 0.05rem;

        }

        .product__plus {
          top: .02rem;
          position: relative;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 20px;
          text-align: center;
          font-size: 0.2rem;
          color:#0091ff ;
          margin-left: 0.05rem;
        }
      }
    }
  }

  .check {
    display: flex;
    height: 0.49rem;
    border-top: 0.01rem solid #f1f1f1;
    .check__icon {
      position: relative;
      width: 0.84rem;
    }
    .check__icon__img {
      display: block;
      position: relative;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }

    .check__icon__tag {
      position: absolute;
      left: 0.47rem;
      top: 0.04rem;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: #e93b3b;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
    }

    .check__info {
      flex: 1;
      .check__info__price {
        font-size: 18px;
        color: #e93b3b;
        line-height: 0.49rem;
      }
    }

    .check__btn {
      width: 0.98rem;
      line-height: 0.48rem;
      background: #4fb0f9;
      color: #ffffff;
      text-align: center;
      font-size: 0.14rem;
      a{
        text-decoration: none;
        color: #ffffff;
      }
    }
  }
}
</style>