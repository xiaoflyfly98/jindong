<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
            <div class="wrapper__input">
            <input class="wrapper__input__content" type="text" placeholder="请输入手机号">
            </div>   
            <div class="wrapper__input"> 
            <input class="wrapper__input__content" type="password" placeholder="请输入密码">
            </div>
            <div class="wrapper__input"> 
            <input class="wrapper__input__content" type="password" placeholder="确认密码">
            </div>
           
            <div class="register-button" @click="handleRegister">注册</div>
            <span class="wrapper__return" 
             @click="handleLoginClick">已有账号去登陆</span>

             <Toast v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';  
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })

const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.code === '0002') {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }

    const { username, password, ensurement } = toRefs(data)
    return { username, password, ensurement, handleRegister}
}

    const useLoginEffect = () => {
    const router = useRouter()
    const handleLoginClick = () => {
    router.push({ name: 'Login'});
  }
  return { handleLoginClick }
}

export default {
    name:'Register',
    components: { Toast }, 
    setup() {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, ensurement, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect();
    return {
      username, password, ensurement, show, toastMessage,
      handleRegister,handleLoginClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
    .wrapper{
        position:absolute;
        top: 50%;
        right: 0;
        left: 0;
        transform: translateY(-50%);
        .wrapper__img{
            height: .66rem;
            width: .66rem;
            margin: 0 auto .4rem auto;
            display: block;
        }
        .wrapper__input{
            width: 2.95rem;
            height: 0.48rem;
            background: #F9F9F9;
            border: 1px solid rgba(0,0,0,0.10);
            border-radius: 6px;
            margin: 0 auto .16rem auto;
            
            .wrapper__input__content{
                margin: .12rem 0 .12rem .16rem;
                font-size: 16px;
                color: $content-notice-fontcolor;
                background: none;
                letter-spacing: 0;
                line-height: .22rem;
                outline: none;
                border: none;
                width: 100%;
            }
        }

        .register-button{
            width: 2.95rem;
            line-height: .48rem;
            background: #0091FF;
            border-radius: 0.04rem;
            font-size: .16rem;
            text-align: center;
            color: #fff;
            margin: 0.16rem auto 0.16rem auto;
            box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        }
      
        .wrapper__return{
                display: block;
                font-size: 0.14rem;
                color:$content-notice-fontcolor;
                letter-spacing: 0;
                text-align: center;
                line-height:0.20rem ;
            }

    }
</style>