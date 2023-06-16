<template>
<div class="products">
<div class="products__title"
    >{{shopName}}</div>
    <div class="product__item"
     v-for="item in visibleProductList" 
      :key="item._id"  
    >
    <div>
    <img
    class="product__item__img" :src="item.imgUrl"/>
    </div>
        <div class="product__item__detail">
        <h4 class="product__item__title">{{item.name}}</h4>
        <div class="product__item__price">
        <span class="product__item__yen">&yen;{{item.price.toFixed(2)}}&nbsp;</span>
        <span class="product__item__num">X&nbsp;{{item.count}}</span>
        <span class="product__item__total">&yen;{{(item.count * item.price).toFixed(2) }}</span>   
        </div>
    </div>
    </div>
        <div class="products__showBtn"
         v-if="productList2.length>2">
        <span class="products__showBtnAll iconfont" 
        @click="()=>handleshowall(showall)">展示/收起
         <span v-html="showall ? '&#xe65d;' : '&#xe65e;'"></span>
        </span>
        </div>
</div>
</template>

<script>
import {usecommonCartEffect} from '../../effects/cartEffects'
import {ref,computed} from'vue'
import { useRoute } from 'vue-router'

const useshowAllBtenEffect= (productList)=>{

    const showall = ref(false)
    let productList2=[]
    //做循环把商品对象变成数组
    for (let i in productList.value){
       productList2.push(productList.value[i])  
    }
    //判断商品数量是否超过两个，给予不同展示
    const visibleProductList = computed(()=>{
        const list = showall.value ? productList2:productList2.slice(0, 2)
        return list
    })
    //展示开关
    const handleshowall=(states)=>{
       showall.value=!states
    }
    // console.log(productList2)
 return {showall,visibleProductList,handleshowall, productList2}
}

export default {
    name:'ProductList',
    setup() {
    const route= useRoute();
    const shopId= route.params.id
    const {shopName,productList}=usecommonCartEffect(shopId)
    const {showall,visibleProductList,handleshowall, productList2}=useshowAllBtenEffect(productList)
    console.log(productList)
    return {productList,shopName,showall,handleshowall,productList2,
        visibleProductList
    }
},
}
</script>

<style lang="scss" scoped>
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
</style>