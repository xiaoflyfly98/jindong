<template>
   <div class="wrapper">
        <div class="title__content">
            <div class="title__content__back iconfont"
            @click="handleback"
            >&#xe6db;</div>
            <div class="title__content__info">管理收货地址</div>
            <router-link to="/creatmyadress">
            <div class="title__content__setInfo">新建</div>
            </router-link>
        </div>

        <div class="addressInfo">
            <div class="addressInfo__title">我的收货地址</div>
            <router-link :to="{name: 'Changemyadress'}"> 
            <div class="addressInfo__content">
                <div class="addressInfo__content__name">小慕
                <span class="addressInfo__content__num">18911023261</span>
                </div>
                <div class="addressInfo__content__address">
                北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层
                </div>
                <div class="addressInfo__content__icon iconfont">&#xe642;</div>
            </div>
             </router-link> 
        </div>
   </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name:'Myadress',
    setup() {
        const router = useRouter();
        const handleback = ()=>{
            router.back()
        }
        return {handleback}
    },
}
</script>

<style lang="scss" scoped>
.wrapper{
    overflow-y: scroll;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f1f1f1;
    .title__content{
        line-height: .44rem;
        display: flex;
        height: .44rem;
        background: #FFFFFF;
        align-items: center;
        a{
            text-decoration: none;
        }
        .title__content__back{
            padding-left: .14rem;
            font-size: 22px;
            color: #B6B6B6;
            top: .01rem;
            position: relative;
        }
        .title__content__info{
            flex: 1;
            text-align: center;
            font-size: .16rem;
            color: #333333;
        }
        .title__content__setInfo{
            padding-right: .18rem;
            color: #333333;
            text-align: right;
            font-size: 14px;
        }
    }
    
    .addressInfo{
        position: relative;
        .addressInfo__title{
        font-size: .14rem;
        color: #333333;
        line-height: .2rem;
        padding: .16rem 0 .12rem .18rem;
        }
    a{
        text-decoration: none;
     }        
        .addressInfo__content{
            position: relative;
            left: 50%;
            transform: translate(-50%);
            width: 3.39rem;
            height: 1.04rem;
            background: #FFFFFF;
            border-radius: 4px;
            margin-bottom: .16rem;
           
            .addressInfo__content__name{
                font-size: 14px;
                line-height: .2rem;
                color: #999999;
                padding: .18rem 0 .08rem .16rem;
                .addressInfo__content__num{
                    padding-left: .66rem;
                }

            }
            .addressInfo__content__address{
                font-size: .14rem;
                color: #333333;
                line-height: .2rem;
                width: 2.6rem;
                height: .4rem;
                padding-left: .16rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

            }
            .addressInfo__content__icon{
                position: absolute;
                top: .44rem;
                right: .16rem;
                line-height: .20rem;
                font-size: .20rem;

            }

        }
       
       
    }

}
</style>