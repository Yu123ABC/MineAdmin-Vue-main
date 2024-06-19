<!--
 - MineAdmin is committed to providing solutions for quickly building web applications
 - Please view the LICENSE file that was distributed with this source code,
 - For the full copyright and license information.
 - Thank you very much for using MineAdmin.
 -
 - @Author X.Mo<root@imoi.cn>
 - @Link   https://gitee.com/xmo/mineadmin-vue
-->
<script setup>
import { reactive, ref } from 'vue'
import verifyCode from '@cps/ma-verifyCode/index.vue'
import { useUserStore } from '@/store'
import { useTagStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { request } from '@/utils/request'

request({
  url: 'system/getBingBackgroundImage', timeout: 10000, method: 'get'
}).then( res => {
  document.getElementById('background').style.backgroundImage = `url(${res.data.url})`
})

const router = useRouter()
const route  = useRoute()
const Verify = ref(null)

const loading = ref(false)

let isDevelop =  import.meta.env.VITE_APP_ENV === 'development'

var odata = isDevelop ?
    { username: 'superAdmin', password: 'admin123', code: '' }
    : { username: '', password: '', code: '' }


const form = reactive(odata)

const userStore = useUserStore()

const redirect = route.query.redirect ? route.query.redirect : '/'

const handleSubmit = async ({ values, errors }) => {
  if (loading.value) {
    return
  }
  loading.value = true
  if ((isDevelop || Verify.value.checkResult(form.code)) && (! errors)) {
    const result = await userStore.login(form)
    if (! result) {
      loading.value = false
      return
    }
    useTagStore().clearTags()
    router.push(redirect)
  }
  loading.value = false
}
</script>
<template>
  <div id="background" class="fixed"></div>
  <div class="bg-backdrop-layout"></div>
  <div class="login-container">
    <div class="login-width md:w-10/12 w-11/12 mx-auto flex justify-between h-full items-center">
      <div class="w-6/12 mx-auto left-panel rounded-l pl-5 pr-5 hidden md:block">
        <div class="logo"><img :src="`${$url}logo.svg`" width="45"><span>{{ $title }}</span></div>
        <div class="slogan flex justify-end"><span>---- {{ $t('sys.login.slogan') }}</span></div>
      </div>

      <div class="md:w-6/12 w-11/12 md:rounded-r mx-auto pl-5 pr-5 pb-10">
        <h2 class="mt-10 text-3xl pb-0 mb-10">{{ $t('sys.login.title') }}</h2>
        <a-form :model="form" @submit="handleSubmit">
			 	  <a-input v-model="form.name" placeholder="手机号/用户名/邮箱"/>
				  <a-input-password visibility="true"  placeholder="密码" :defaultVisibility="false" allow-clear />
				  <a-button class="arco-btn arco-btn-primary admin_btn" html-type="submit" type="primary" long size="large" :loading="loading">
					{{ $t('sys.login.loginBtn') }}
				  </a-button>
			 	</a-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
#background {
  top: 0; left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.bg-backdrop-layout {
  top: 0; left: 0;
  position: fixed;
  width: 100%; height: 100%;
  z-index: 2;
  backdrop-filter: blur(25px);
}
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  z-index: 3;
  .login-width {
    max-width: 950px;
    background: #fff;
    padding: 10px;
    height: 500px;
    position: relative;
    top: 50%;
    margin-top: -255px;
    border-radius: 10px;
  }

  .left-panel {
    height: 491px;
    background-image: url(@/assets/login_picture.svg);
    background-repeat: no-repeat;
    background-position: center 60px;
    background-size:contain;
  }

  .logo {
    display: flex; margin-top: 20px; color: #333;
    span {
      font-size: 28px; margin-left: 15px;
      color: rgb(var(--primary-6));
    }
  }
  .slogan {
    font-size: 16px; line-height: 50px;
  }

  :deep(.arco-input-append) {
    padding: 0 !important;
  }

  .other-login{
    cursor: pointer;
  }

  .qq:hover, .alipay:hover {
    background: #165DFF;
  }
  .wechat:hover {
    background: #0f9c02;
  }

  .weibo:hover {
    background: #f3ce2b;
  }
}
</style>
