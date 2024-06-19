<template>
	<div class="header">
		<div class="w1872 clearfix">
			<div class="left" style="width:85%;">
				<a href="" class="logo left"><img src="../../assets/logo.png" alt=""></a>
				<div class="header_ul left">
					<ul v-if="CategoryM.length > 0" class="clearfix">
						<li @mouseover="navShow" @mouseout="navHide" v-for="(item,i) in CategoryM" :key="i">
							<a href="">{{item.title}}<img src="../assets/h_xl.png" alt=""></a>
							<div class="show_nav_f clearfix" v-if="CategoryM[i].children">
								<label class="clearfix">
									<a href="" v-for="ite in item.children" :key="item.id">{{ite.title}}</a>
								</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="right" style="width:15%;">
				<div class="admin" v-if="admin">
					<a-button style="font-size:1.5rem;cursor: pointer;background:none;" @click="handleClick"> 登 录 </a-button>
				</div>
				<div class="admin" v-else="!admin">
					<p>
						<img src="../../assets/admin.png" alt="">
						<span class="ell"> {{ profileStore.userName }}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
	
	<div class="form">
		  <a-modal class="adminV" width="auto" v-model:visible="visible" :footer="false" hide-title="true" @cancel="handleCancel" @before-ok="handleBeforeOk">
			 <div class="left logoM">
			 	<span><img src="../../assets/logo.png" alt=""></span>
			 </div> 
			 <div class="right formV">
				
				<span style="font-size:24px;font-weight: bold;margin-bottom:2rem;display: block;">登录</span>
			 	<a-form :model="form" @submit="handleSubmit">
					
			 	  <a-input v-model="form.username" placeholder="手机号/用户名/邮箱"/>
				  <a-input-password visibility="true" v-model="form.password"  placeholder="密码" :defaultVisibility="false" allow-clear />
				  <a-form-item
						v-if="!isDevelop"
						field="code"
						:hide-label="true"
						:rules="[{
						required: true,
						match: /^[a-zA-Z0-9]{4}$/,
						message: $t('sys.login.verifyCodeNotice')
						}]"
					>
						<a-input
							v-model="form.code"
							:placeholder="$t('sys.login.verifyCode')"
							size="large"
							allow-clear
						>
						<template #prefix><icon-safe /></template>
						<template #append>
							<verify-code ref="Verify" />
						</template>
						</a-input>
				  </a-form-item>

				  <a-button class="arco-btn arco-btn-primary admin_btn" html-type="submit" type="primary" long size="large" :loading="loading">
					{{ $t('sys.login.loginBtn') }}
				  </a-button>
			 	</a-form>
			 </div>
		  </a-modal>
	</div>

	<div class="nav_ip">
		<div class="swiper mySwiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="">外事活动</a>
				</div>
				<div class="swiper-slide">
					<a href="">对外合作</a>
				</div>
				<div class="swiper-slide">
					<a href="">友好交往</a>
				</div>
				<div class="swiper-slide">
					<a href="">外办建设</a>
				</div>
			</div>
		</div>
	</div>

</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import verifyCode from '../ma-verifyCode/index.vue'
import { useUserStore } from '@/store'
import { useTagStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { request } from '@/utils/request'
import Category from '@/api/login'

const router = useRouter()
const route  = useRoute()
const Verify = ref(null);
const loading = ref(false);

let isDevelop =  import.meta.env.VITE_APP_ENV === 'development'

var odata = isDevelop ?
    { username: 'superAdmin', password: 'admin123', code: '' }
    : { username: '', password: '', code: '' } //q97b


const form = reactive(odata)

const userStore = useUserStore()

const redirect = route.query.redirect ? route.query.redirect : '/'

const handleSubmit = async ({ values, errors }) => {
  if (loading.value) {
    return
  }
  loading.value = true
  console.log(form.code);
  if ((isDevelop || Verify.value.checkResult(form.code)) && (! errors)) {
    const result = await userStore.login(form)
    if (! result) {
      loading.value = false
      return
    }
    useTagStore().clearTags();
    router.push(redirect);
  }
  loading.value = false
}

const CategoryM = ref([])
onMounted(()=>{
	Category.getCategorys().then(res => {
		if (res.success && res.code == 200) {
			CategoryM.value = res.data;
		}
	})
})


</script>

<script>
	import {Swiper} from 'swiper'
	import 'swiper/css';

	export default {
		name: "",
		data() {
			return {
				profileStore: "",
				navSwiper:"",
				admin:true,
				form:{name: '',post: ''},
				visible:false,
				Verify:null,
				isDevelop:"development",
	            router:"",
				route:""
			}
		},
		mounted() {
			var $this=this;
			$this.navSwiper = new Swiper('.nav_ip .swiper', {
				loop:true,
				slidesPerView:"auto"
			});	
		},
		methods: {
			handleClick(){
			      this.visible = true;//显示
			},
			handleBeforeOk(){
			  console.log(this.form)
			},
			handleCancel (){
				this.visible = false;//弹窗隐藏
			},
			navShow(event) {
				event.stopPropagation();
				if(event.currentTarget.children[1]){
					event.currentTarget.children[1].style = "display:block";
				    event.currentTarget.children[0].children[0].style = "transform:rotate(-180deg)";
				}
			},
			navHide(event) {
				event.stopPropagation();
				if(event.currentTarget.children[1]){
					event.currentTarget.children[1].style = "display:none";
				    event.currentTarget.children[0].children[0].style = "transform:rotate(0deg)";
				}
			}
		},
		setup() {

		}
	}
</script> 

<style scoped="">
	.header {
		padding: 2.3rem 0px;
	}

	.header .logo {
		display: inline-block;
		height: 6.6rem;
		width: auto;
		border: none;
	}

	.header .logo img {
		display: block;
		height: 100%;
		border: none;
	}

	.header_ul {
		height: 6.6rem;
	}

	.header_ul ul>li {
		float: left;
		font-size: 1.4rem;
		color: #000;
		line-height: 6.6rem;
		margin: 0px 2.8rem;
		position: relative;
		z-index: 111;
		cursor: pointer;
	}

	.header_ul ul>li:first-child {
		margin-left: 6.5rem;
	}

	.header_ul ul li img {
		margin-left: 1rem;
		width: 0.8rem;
	}

	.header_ul ul li a {
		color: #000;
	}

	.admin {
		text-align: right;
		height: 6.6rem;
		line-height: 6.6rem;
	}

	.admin img {
		display: inline-block;
		width: 1.5rem;
		margin-right: 1rem;
		position: relative;
		top: 0.4rem;
		min-width: 9px;
	}

	.show_nav_f {
		position: absolute;
		top: 0px;
		z-index: 22;
		width: 12rem;
		left: 0px;
		text-align: center;
		left: 50%;
		margin-left: -6rem;
		padding-top: 5rem;
		padding-bottom: 2rem;
		display: none;
	}

	.show_nav_f>label {
		display: block;
		background: white;
		padding: 0.5rem 0px;
		box-shadow: 0rem 0.5rem 0.5rem rgb(0 0 0 / 10%);
		border-radius: 0.5rem;
		position: relative;
		overflow: hidden;
	}

	.show_nav_f a {
		display: block;
		position: relative;
		font-size: 1.1rem;
		margin: 0.5rem 0px;
		line-height: normal;
	}

	.show_nav_f a:hover {
		color: #004bc5;
	}
	.nav_ip .swiper-slide{
		width:auto !important; 
	}
	.nav_ip .swiper-slide a{
         display: block;
         padding: 3rem 5rem;
         font-size: 16px;
         color: white;
     }
	.nav_ip .swiper-slide-active a{
		color: rgb(255, 108, 0);
		font-weight: bold;
	 }
	.nav_ip{
		border-top:1px solid #eee;
		display: none;
		background:#0155b2;
	}
	.logoM{
		width: 42%;
		    height: 28rem;
		    display: flex;
		    align-items: center;
			padding:3%;
			background:#eee;
	}
	.logoM img{
		    display: block;
		    width: 60%;
		    margin: 0px auto;
	}
	.formV{
		width: 50%;
		    height: 28rem;
		    padding: 3% 3%;
	}
	.formV .arco-input-wrapper{
		margin:0.8rem 0px;
	}
	.admin_btn{
		font-size:16px;
		padding:0.5rem 2rem;
		background:#f07700;
		margin-top:5rem;
		margin:8% auto 0 auto;
		display: block;
	}
	@media all and (max-width:1300px){
		.logoM,.formV{
			height:45rem;
		}
	}
	@media all and (max-width:780px) {
		.header{
			padding:4rem 0px;
		}
		.header_ul {
			display: none;
		}
		.nav_ip{
			display: block;
		}
		.header .logo {
			height: 9.6rem;
		}

		.admin {
			line-height: 9.6rem;
		}
		.logoM,.formV{
			height:64rem;
		}
		.formV{
			width:58%;
		}
		
	}
</style>

<style>
	
	.form .arco-modal-body{
		padding:0px;
	}
	.adminV .arco-modal-body{
		padding:0px;
	}
	@media all and (max-width:780px) {
		.canvas{
			cursor: pointer;
			width: 51px;
		}}
</style>
