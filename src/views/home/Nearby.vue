<template>
  <div class="nearby">
    <h3 class="title">附近店铺</h3>
    <router-link 
    v-for="item in nearbyList" 
    :to="`/Shop/${item._id}` " 
    :key="item._id"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo";

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const result = await get("/api/shop/hot-list");
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data;
    }
  };
  return { nearbyList, getNearbyList };
};
export default {
  name: "Nearby",
  components: { ShopInfo },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return { nearbyList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.nearby {
  .title {
    margin: 0.16rem 0 0 0;
    font-size: 0.18rem;
    color: $content-fontcolor;
    font-weight: 
    normal;
  }
  a{
    text-decoration: none;
  }
}
</style>