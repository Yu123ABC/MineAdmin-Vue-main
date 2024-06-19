<!--
 - MineAdmin is committed to providing solutions for quickly building web applications
 - Please view the LICENSE file that was distributed with this source code,
 - For the full copyright and license information.
 - Thank you very much for using MineAdmin.
 -
 - @Author X.Mo<root@imoi.cn>
 - @Link   https://gitee.com/xmo/mineadmin-vue
-->
<template>
  <a-form ref="formRef" :rules="rules" :model="form"  @submit="handleSubmit">
    
    <a-form-item field="password" label="原密码:" validate-trigger="blur">
      <a-input-password v-model="form.password" placeholder="请输入原密码" />
    </a-form-item>

   
    <a-form-item field="password" label="新密码:" validate-trigger="blur">
      <a-input-password v-model="form.password1" placeholder="请输入新密码" />
    </a-form-item>

    <a-form-item field="password2" label="确认密码:" validate-trigger="blur">
      <a-input-password v-model="form.password2" placeholder="请再次确认新密码" />
    </a-form-item>

    <a-button class="arco-btn arco-btn-primary admin_btn" html-type="submit" type="primary" long size="large" :loading="loading">
        提交
    </a-button>

  </a-form>  
</template>
<script setup>
import { reactive } from 'vue';

const handleSubmit = ({values, errors}) => {
      console.log('values:', values, '\nerrors:', errors)
    }

    const form = reactive({
      name: '',
      password: '',
      password1: '',
      password2: '',
    });

    const rules = {
      name: [
        {
          required: true,
          message:'name is required',
        },
      ],
      password: [
        {
          required: true,
          message:'password is required',
        },
      ],
      password1: [
        {
          required: true,
          message:'password is required',
        },
      ],
      password2: [
        {
          required: true,
          message:'password is required',
        },
        {
          validator: (value, cb) => {
            if (value !== form.password1) {
              cb('two passwords do not match')
            } else {
              cb()
            }
          }
        }
      ]
    }

</script>


<style scoped lang="less">

.arco-form{
  width:50%;
  margin-top:8rem;
  margin-left:8rem;
  border: 1px solid #c1bebe;
  padding:3% 3% 6% 3%;
  border-radius:0.3rem;
}
.admin_btn{
  width:120px;
  margin:0px auto;
  margin-top:8rem;
  font-size:1.5rem;
}
</style>
<style>

.arco-form-item-label-col{
  flex:initial;
  justify-content: left !important;
  width: 10rem;
}
.arco-form-item-label-col > .arco-form-item-label{
 
  font-size:1.4rem;
}
</style>