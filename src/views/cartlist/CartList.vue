<template>
    <div class="wrapper">

    <div class="title">我的全部购物车（{{filteredCartList.length}}）</div>

    <div class="products"
    v-for="(shop, index) in filteredCartList" :key="index"
    >
    <div class="products__title">沃尔玛</div>
    <template v-for="product in shop" :key="product._id"

    >
    <div class="product__item"
     v-if="product.count>0"
    >
    <img class="product__item__img" :src="product.imgUrl" />
        <div class="product__item__detail">
        <h4 class="product__item__title">{{product.name}}</h4>
        <div class="product__item__price">
        <span class="product__item__yen">&yen;{{ product.price }}&nbsp;</span>
        <span class="product__item__num">X&nbsp;{{product.count}} </span>
        <span class="product__item__total">&yen;{{(product.count * product.price).toFixed(2)}} </span>   
        </div>
    </div>
    </div>
    </template>
          <div class="products__showBtn" >
          <span class="products__showBtnAll iconfont" 
          >展示/收起
          </span>
          </div>
    </div>
 
    </div>
  <Docker :currentIndex="1" />
</template>

<script>
import Docker from "../../components/Docker";
import { useStore } from "vuex"
export default {
  name: "CartList",
  components: { Docker },
  setup() {
    const store = useStore()
    const cartList = store.state.cartList;
    const finalyCartList = []
    for (let i in cartList ){
      finalyCartList.push(cartList[i].productList)
    }
    const filteredCartList = finalyCartList.filter(shop => Object.keys(shop).length > 0)


    // console.log(cartList)
    // console.log(cartList[1])
    // console.log(cartList[1].productList)

    
    return {finalyCartList,filteredCartList}
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: rgb(248, 248, 248);
  .title {
    font-size: 16px;
    color: #333333;
    line-height: 0.44rem;
    text-align: center;
    background: #ffffff;
    margin-bottom: 0.16rem;
  }
   .products{
     position: relative;
     overflow-x: scroll;
     width: 3.339rem;
     margin-bottom: .20rem;
     background: #FFFFFF;
     border-radius: 4px;
     left: 50%;
     transform: translate(-50%);
        .products__title{
            font-size: 16px;
            color: #333333;
            padding: .16rem 0 .16rem .16rem;
        }
        .product__item{
            display: flex;
            .product__item__img{
            width: .49rem;
            height: .49rem;
            padding: 0 .16rem;
            margin-bottom: .16rem;
             }
        .product__item__detail{
            flex: 1;
            .product__item__title{
                margin: 0;
                font-size: 14px;
                color: #333333;
                line-height: .20rem;
                margin-bottom: .06rem;
            }
            .product__item__price{
                display: flex;
                line-height: .20rem;
                font-size: 14px;
               .product__item__yen{
                color: #E93B3B;
               }
               .product__item__num{
                 color: #E93B3B;
               }
               .product__item__total{
                flex: 1 ;
                margin-right: .16rem;
                text-align: right;
               }
            }
            }
        }
        .products__showBtn{
            width: 3.07rem;
            height: .28rem;
            background: #F5F5F5;;
            text-align: center;
            color: #999999;
            margin: 0 auto .16rem auto;
            .products__showBtnAll{
               line-height: .28rem;  
                font-size: 14px;
                padding: .04rem 0;
            }

        }
        
    }
  
}
</style>