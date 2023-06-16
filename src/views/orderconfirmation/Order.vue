<template>
  <div class="order">
    <div class="order__price">
      实际付款&nbsp;&yen;{{ calculations.price }}元
    </div>
    <div class="order__btn" @click="() => handlesubimtclick(true)">
      提交订单
    </div>
    <div
      class="mask"
      v-show="showConfim"
      @click="() => handlesubimtclick(false)"
    >
      <div class="mask__content" @click.stop>
        <h3 class="mask__content__title">确认要离开收银台？</h3>
        <div class="mask__content__desc">请尽快完成支付，否则将被取消</div>
        <div class="mask__content__btns">
          <div
            class="mask__content__btn__first"
            @click="() => handleConfirmOrder(true)"
          >
            取消订单
          </div>
          <div
            class="mask__content__btn__last"
            @click="() => handleConfirmOrder(false)"
          >
            确认支付
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { usecommonCartEffect } from "../../effects/cartEffects";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { post } from "../../utils/request";
import { ref } from "vue";

//支付订单逻辑
  const useMakeOrderEffect = (shopId, shopName,productList) => {
  const router = useRouter();
  const store = useStore();
  const handleConfirmOrder = async (isCanceled) => {
    const products = [];
    for (let i in productList.value) {
      const product = productList.value[i];
      products.push({ id: parseInt(product._id, 10), num: product.count });
    }
    try {
      const result = await post("/api/order", {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products,
      });
      if (result?.errno === 0) {
        store.commit("clearCartData", shopId);
        router.push({ name: "OrderList" });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return { handleConfirmOrder };
};

//蒙层展示
const useShowMaskEffect = () => {
  const showConfim = ref(false);
  const handlesubimtclick = (status) => {
    showConfim.value = status;
  };
  return { handlesubimtclick,showConfim};
};

export default {
  name: "Order",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { calculations, shopName, productList } = usecommonCartEffect(shopId);
    const { handleConfirmOrder } = useMakeOrderEffect(shopId,shopName,productList);
    const { showConfim, handlesubimtclick } = useShowMaskEffect();

    return {
      calculations,
      shopName,
      productList,
      showConfim,
      handleConfirmOrder,
      handlesubimtclick,
    };
  },
};
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  height: 0.49rem;
  .order__price {
    flex: 1;
    font-size: 14px;
    color: #333333;
    text-align: left;
    line-height: 0.49rem;
    margin-left: 0.24rem;
  }
  .order__btn {
    background: #4fb0f9;
    line-height: 0.49rem;
    font-size: 14px;
    color: #ffffff;
    width: 0.98rem;
    text-align: center;
  }
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  .mask__content {
    width: 3.01rem;
    height: 1.57rem;
    position: absolute;
    background: #ffffff;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .mask__content__title {
      text-align: center;
      font-size: 18px;
      color: #333333;
      line-height: 0.25rem;
    }
    .mask__content__desc {
      font-size: 14px;
      color: #666666;
      font-size: 0.15rem;
      text-align: center;
    }
    .mask__content__btns {
      display: flex;
      margin: 0.24rem 0.58rem;
      .mask__content__btn__first {
        border: 1px solid #4fb0f9;
        width: 0.8rem;
        height: 0.32rem;
        font-size: 14px;
        color: #0091ff;
        border-radius: 16px;
        line-height: 0.32rem;
        text-align: center;
        margin-right: 0.24rem;
      }
      .mask__content__btn__last {
        border: 1px solid #4fb0f9;
        flex: 1;
        border-radius: 16px;
        width: 0.8rem;
        height: 0.32rem;
        font-size: 14px;
        color: #ffffff;
        line-height: 0.32rem;
        background: #4fb0f9;
        text-align: center;
      }
    }
  }
}
</style>