<template>
  <div class="wrapper">
    <div class="title__content">
      <div 
      class="title__content__back iconfont"
      @click="handleback"
      >&#xe6db;</div>
      <div class="title__content__info">编辑收货地址</div>
      <div class="title__content__saveInfo">保存</div>      
    </div>

    <div class="creatmyinfo">
        <div class="creatmyinfo__content">
          所在城市：
           <input 
           class="creatmyinfo__content__input"
           type="text " value="北京市">
        </div>
          <div class="creatmyinfo__content">
          小区/大厦/学校：
           <input 
           class="creatmyinfo__content__input"
           type="text " value="北理工大学国防科技园">
        </div>
          <div class="creatmyinfo__content">
          楼号-门牌号：
           <input 
           class="creatmyinfo__content__input"
           type="text " value="2号楼10层">
        </div>  <div class="creatmyinfo__content">
          收货人：
           <input 
           class="creatmyinfo__content__input"
           type="text " value="小慕">
        </div>
         <div class="creatmyinfo__content">
          联系电话：
           <input 
           class="creatmyinfo__content__input"
           type="text " value="18911023277">
        </div>

   
    </div>

  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "Changemyadress",
  setup() {
    const router= useRouter()
    const handleback=()=>{
      router.back()
    }
    return {handleback}

  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: scroll;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f1f1f1;
  .title__content {
    line-height: 0.44rem;
    display: flex;
    height: 0.44rem;
    background: #ffffff;
    align-items: center;
    a {
      text-decoration: none;
    }
    .title__content__back {
      padding-left: 0.14rem;
      font-size: 22px;
      color: #b6b6b6;
      top: 0.01rem;
      position: relative;
    }
    .title__content__info {
      flex: 1;
      text-align: center;
      font-size: 0.16rem;
      color: #333333;
    }
    .title__content__saveInfo {
      padding-right: 0.18rem;
      color: #333333;
      text-align: right;
      font-size: 14px;
    }
  }
  .creatmyinfo{
    background:#ffffff;
    position: relative;
    margin-top: .12rem;
    padding-left: .18rem;
    height: 2.36rem;
    border-top: 0.01rem solid #F1F1F1;
    border-bottom: 0.01rem solid #F1F1F1;
    .creatmyinfo__content{
        display: flex;
        font-size: 14px;
        color: #666666;
        align-items: center;
        line-height: 20px;
        border-top: 0.01rem solid #F1F1F1;
        border-bottom: 0.01rem solid #F1F1F1;
        .creatmyinfo__content__input{
          outline: none;
          flex: 1;
          border: none;
           height: .44rem;
          
        }

    }
  }
}
</style>