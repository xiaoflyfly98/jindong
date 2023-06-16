<template>123</template>

<script>
import { get } from "../../utils/request";
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "test",
  setup() {
    const data = reactive({ list: {} });
    const getData = async () => {
      try {
        const result = await axios
          .post("https://www.fastmock.site/mock/0eaaf3ba199cd9e2801cf2f088df6d96/jindong/api/login"
          ,{
            data:{name:'feifei'}
          }
          ,{
            headers: {'Content-Type': 'x-www-form-urlencoded'},
            timeout:1000
          }
          )
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }catch (e) {
        console.log(e);
      }

      // console.log(result)
    };
    getData();
    return { getData };
  },
};
</script>

<style lang="scss" scoped>
</style>