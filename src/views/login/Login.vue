 <template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="username"
        type="text"
        placeholder="请输入手机号"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="password"
        type="text"
        placeholder="请输入密码"
      />
    </div>
    <div class="login-button" @click="handleLogin">登录</div>
    <div class="wrapper__register" @click="handleRegisterClick">立即注册</div>
    <Toast
      v-if="show"
      :message="toastMessage"
    />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast";

const useLoginEffect =( showToast)=>{
  const router = useRouter();
  const data = reactive({ username: "", uesrpassword: "" });

   const handleLogin = async () => {
      try {
        const result = await post("/api/login", {
          username: data.username,
          password: data.password,
        });

        if (result?.code ==="0002") {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        } else {
           showToast("登录失败");
        }
      } catch (e) {
         showToast("请求失败");
      }
    };
    const { username, password } = toRefs(data)
    return { username, password, handleLogin}
}


const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}


export default {
  name: "Login",
  components: { Toast },

  setup() {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()


     return {
      username, password, show, toastMessage,
      handleLogin, handleRegisterClick,
            }
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  .wrapper__img {
    height: 0.66rem;
    width: 0.66rem;
    margin: 0 auto 0.4rem auto;
    display: block;
  }
  .wrapper__input {
    width: 2.95rem;
    height: 0.48rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin: 0 auto 0.16rem auto;

    .wrapper__input__content {
      margin: 0.12rem 0 0.12rem 0.16rem;
      font-size: 16px;
      color: $content-notice-fontcolor;
      background: none;
      letter-spacing: 0;
      line-height: 22px;
      outline: none;
      border: none;
      width: 100%;
    }
  }

  .login-button {
    width: 2.95rem;
    line-height: 0.48rem;
    background: #0091ff;
    border-radius: 0.04rem;
    font-size: 0.16rem;
    text-align: center;
    color: #fff;
    margin: 0.32rem auto .16rem auto;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
  }

  .wrapper__register {
    font-size: 14px;
    color: $content-notice-fontcolor;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>