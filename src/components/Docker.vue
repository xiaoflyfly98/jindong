<template>
    <div class="docker" >
    <div v-for="(item,index) in dockerList" 
    :class="{'docker__item': true, 'docker__item--active': index === currentIndex}"
    :key="item.icon">
      <router-link :to='item.to'>
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
      </router-link>
    </div>

  </div>
</template>
<script>
export default {
    name:'Docker',
    props:['currentIndex'],
    setup(){
      const dockerList=[
        {icon:'&#xe8ff;',text:'首页',to:{name:'Home'}},
        {icon:'&#xe600;',text:'购物车',to:{name:'CartList'}},
        {icon:'&#xe897;',text:'订单',to:{name:'OrderList'}},
        {icon:'&#xe8a0;',text:'我的',to:{name:'Myinfo'}}
      ]
      return{dockerList}
    }
   
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
@import '../style/mixins.scss';
.docker {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  display: flex;
  padding: 0 0.18rem;
  border-top: .01rem solid #f1f1f1;

  &__item {
    flex: 1;
    text-align: center;
     a{
      color: #333333 ;
      text-decoration: none;
    }
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    &--active {
      a{
        color: #1fa4fc;
      }
      
    }
  }

  &__title {
    font-size: .2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>