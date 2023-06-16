<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div 
      class="order"
      v-for=" (item,index) in list"
      :key="index"
      >
        <div class="order__title">
          {{item.shopName}}
          <span class="order__status">
            {{item.isCanceled? '已取消':'已提交'}}
          </span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
          <template
          v-for="(innerItem,innerIndex) in item.products "
          :key="innerIndex"
          >
            <img
              class="order__content__img"
              :src="innerItem.product.img"
              v-if="innerIndex <= 3"
            />
              </template>  
          </div>

          <div class="order__content__info">
            <div class="order__content__info__price">&yen;{{item.totalPrice}}</div>
            <div class="order__content__info__count">共{{item.totalNumber}}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="2" />
</template>

<script>
import Docker from "../../components/Docker";
import { reactive, toRefs } from "vue";
import { get } from "../../utils/request";

const useOrderListEffect = () => {
  const data = reactive({ list: [] });
  const getNearbyList = async () => {
    const result = await get("/api/order");
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem)=>{
          totalPrice+=(productItem?.product?.price*productItem?.orderSales)||0
          totalNumber+=productItem?.orderSales || 0
        })
      order.totalPrice=totalPrice
      order.totalNumber=totalNumber
      });
      data.list = result.data;
    }
  };
  getNearbyList();
  const { list } = toRefs(data);
  return { list };
};
export default {
  name: "OrderList",
  components: { Docker },
  setup() {
    const {list} = useOrderListEffect();
    return { list };
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
  .order {
    margin: 0 0.18rem 0.16rem 0.18rem;
    background: #ffffff;
    .order__title {
      padding: 0.16rem 0 0.16rem 0.16rem;
      font-size: 16px;
      color: #333333;
      line-height: 0.22rem;
      .order__status {
        float: right;
        padding-right: 0.18rem;
        text-align: right;
        font-size: 14px;
        color: #999999;
        line-height: 0.2rem;
      }
    }
    .order__content {
      display: flex;
      padding: 0 0.14rem 0.18rem 0.16rem;
      .order__content__imgs {
        flex: 1;
        .order__content__img {
          width: 0.4rem;
          height: 0.4rem;
          padding-right: 0.12rem;
        }
      }
      .order__content__info {
        .order__content__info__price {
          font-size: 14px;
          color: #e93b3b;
          text-align: right;
          line-height: 0.2rem;
          padding-bottom: 0.04rem;
        }
        .order__content__info__count {
          font-size: 12px;
          color: #333333;
          text-align: right;
          line-height: 14px;
        }
      }
    }
  }
}
</style>