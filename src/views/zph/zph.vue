<template>
	<header-nav></header-nav>
	<div class="zph_box">
		<div class="w1400 clearfix">
			<p class="posi">首页-图片-寿县总工会举办""工会送岗位乐业在江淮"专场招聘会</p>
			<div class="zph_cc_b clearfix">
				<a-row class="grid-demo">
					<a-col :xs="24" :md="16" :lg="16">
						<div class="big_img">
							<a :href="href"><img :src="src" alt=""></a>
							<p class="ell"><a :href="href">首页-图片-寿县总工会举办""工会送岗位乐业在江淮"专场招聘会</a></p>
						</div>
                      
					  <div class="swiper_m clearfix"  style="position: relative;">
                      	<div class="swiper mySwiper">
                      	    <div class="swiper-wrapper">
                      	      <div class="swiper-slide" v-for="(item, index) in dataM" :key="index">
                      	        <a :href="item.href">
									<img :src="item.src" alt="">
									<span>{{item.text}}</span>
								</a>
                      	      </div>
                      	    </div>
							 <div class="swiper-button-prev" style="left:0px;" @click="prev"></div>
							 <div class="swiper-button-next" style="right: 0px;" @click="next"></div>
                      	  </div>
                      </div>
						
						<div class="pic_ms clearfix">
							<a-tabs default-active-key="1">
								<a-tab-pane key="1" title="图片介绍">
									<div class="pic_text">
										<p>
											{{pic_text}}
										</p>
									</div>
								</a-tab-pane>
							</a-tabs>
						</div>
					</a-col>
					<a-col :xs="24" :md="7" :lg="7" :offset="1">
						<div class="dow_add clearfix">
							<a-button style="background:#00aeff;color:white;">下 载</a-button>
							<a-button style="background:#ff6c00;color:white;">收 藏</a-button>
							<label><span>浏览329</span><span>下载329</span><span>收藏329</span></label>
						</div>
						<div class="conduct clearfix">
							<a-descriptions :data="data" :size="size" title="基本信息"
								:column="1" />
						</div>
					</a-col>
				</a-row>
			</div>
		</div>
	</div>
	<footer-box></footer-box>
</template>

<script>
	import headerNav from '@/components/header/header.vue'
	import footerBox from '@/components/header/footer.vue'
	
	//import { ref } from 'vue'
	
	import {Swiper} from 'swiper'
	import 'swiper/css';
	import 'swiper/css/navigation';

	export default {
		name: "",
		data() {
			return {
               mySwiper:"",
			   activeIndexm:0,
			   src:"",
			   href:"",
			   pic_text:"",
			   dataM:[
				   {"href":"aa.html","src":"http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg","text":'2024年2月23日，由寿县总工会主办的"工会送岗位乐业在江淮"专场招聘会在新桥国际产业园创业中心举办，本次招聘会共涉及制药、餐饮、快递等63家企业参加招聘，提供销售、普工、服务员、快递员岗位3600余个，涉及汽车零部件制造、会计、电工、质检、智能制造、电商运营、人事专员、销售、餐饮业、制衣、食品加工等工种，1000余名返乡务工人员和农民工前来咨询求职，发放宣传材料3000多份，现场达成用工意向238人。'},
				   {"href":"bb.html","src":"http://www.anhuinews.com/40396/202105/W020240513468186904785.jpg","text":"22"},
				   {"href":"cc.html","src":"http://www.anhuinews.com/40396/202012/W020231214553683046238.jpg","text":"33"},
				   {"href":"dd.html","src":"http://www.anhuinews.com/40396/202012/W020240507374832610821.jpg","text":"44"},
				   {"href":"ee.html","src":"http://www.anhuinews.com/40396/202012/W020240511385179139505.jpg","text":"55"},
				   {"href":"ff.html","src":"http://www.anhuinews.com/40396/202210/W020240401377127685184.jpg","text":"66"},
			   ]
            }
		},
		mounted(){
			var $this=this;
			$this.src=$this.dataM[0].src;
			$this.href=$this.dataM[0].href;
			$this.pic_text=$this.dataM[0].text;
			 $this.mySwiper = new Swiper('.swiper_m .mySwiper', {
				loop:true,
				slidesPerView: 5,
				autoplay: {
				    delay: 3000,
				    stopOnLastSlide: false,
				    disableOnInteraction: true,
				},
				on:{
				    slideChangeTransitionStart: function (event) {
						$this.activeIndexm=this.activeIndex;//当前索引值
						$this.src=event.el.children[0].children[$this.activeIndexm].children[0].children[0].getAttribute("src");//获取当前小图片的路径
						$this.href=event.el.children[0].children[$this.activeIndexm].children[0].getAttribute("href");//获取当前小图的跳转路径
						$this.pic_text=event.el.children[0].children[$this.activeIndexm].children[0].children[1].innerText;//获取当前小图片的图片介绍
				    }
				  }
			});
		},
		methods:{
			prev(){
			   this.mySwiper.slidePrev();
			},
			next(){
				this.mySwiper.slideNext();
			}
		},
		//  beforeDestroy() {
		//     if (this.mySwiper) {
		//       this.mySwiper.destroy()
		//       this.mySwiper = null
		//     }
		// },
		components: {
			headerNav,
			footerBox
		},
		setup() {
			const data = [{
				label: '作者/来源:',
				value: 'Kazun / 500px/500px',
			}, {
				label: '尺寸:',
				value: '41.16x27.44 cm',
			}, {
				label: '存储大小:',
				value: '5.68 MB'
			}, {
				label: '类型:',
				value: 'JPG',
			}, {
				label: '图片数量:',
				value: '9'
			}];
			return {
				data
			}
		}
	}
</script>

<style scoped="">
	.zph_box {
		background: #f2faff url(../assets/bg3.jpg) no-repeat center top;
		background-size: 100%;
		padding-bottom: 5.5rem;
	}

	.posi {
		font-size: 1.05rem;
		color: #7b7b7b;
		padding: 1.5rem 0px;
	}

	.posi a {
		color: #7b7b7b;
	}

	.zph_cc_b {
		padding: 3%;
		background: white;
		box-shadow:0.1rem 0.2rem 0.18rem rgba(174, 174, 174, 0.71);
	}

	.mySwiper {
		    height: 7rem;
		    width: 90%;
		    padding: 0px 5%;
		    margin: 0px auto;
		    overflow: hidden;
			position: relative;
			
	}
.mySwiper:before{
	content:"";
	position: absolute;
	left:0px;
	width:5%;
	top:0px;
	bottom:0px;
	background:white;
	    z-index: 11;
}
.mySwiper::after{
	content:"";
	position: absolute;
	right:0px;
	width:5%;
	top:0px;
	bottom:0px;
	background:white;
	    z-index: 11;
}
	.mySwiper .swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
	}
	.mySwiper .swiper-slide>a{
		display: block;
		margin:0px 0.5rem;
		height:100%;
	}
	.mySwiper .swiper-slide>a span{
		display: none;
	}
	.big_img>a{
		display: block;
		width:100%;
		height:38rem;
		overflow: hidden;
	}
	.big_img img {
		display: block;
		width: 100%;
		height:100%;
	}

	.big_img p {
		font-size: 1.4rem;
		margin: 1rem 0px 2rem 0px;
		color: #000;
	}

	.big_img p a {
		color: #000;
	}

	.pic_ms {
		margin-top: 2rem;
	}

	.pic_text {
		font-size: 1.3rem;
		color: #7d7d7d;
		line-height: 2.2rem;
	}

	.dow_add {
		text-align: center;
		padding-top:6rem;
	}

	.dow_add .arco-btn-size-medium {
		font-size: 1.4rem;
		padding: 0.6rem 3.3rem;
		height: auto;
		border-radius: 0.5rem;
		margin: 0px 1rem;
	}

	.dow_add label {
		display: block;
		margin: 2rem 0px;
	}

	.dow_add label span {
		margin: 0px 1rem;
		color: #4b4b4b;
		font-size: 1.2rem;
	}
	.conduct{
		padding:6% 10%;
		background:#f2f2f2;
	}
	.swiper-button-prev,.swiper-button-next{
		width:1.5rem;
		height:4.5rem;
		background-size:100%;
		z-index:112;
	}
	.swiper-button-prev:after,.swiper-button-next:after{
		
		font-size:2.5rem;
	}
	@media all and (max-width:992px){
		.mySwiper{
			height:8rem;
		}
	}
	@media all and (max-width:768px){
		.mySwiper{
			height:12rem;
		}
		.pic_text{
		    line-height: 22px;
		    font-size: 14px;
		}
		
		.big_img p{
		    margin: 3rem 0px 4rem 0px;
			font-size:14px;
		}
		
		.big_img>a{
			height:48rem;
		}
	}
	@media all and (max-width:444px){
		.swiper-button-prev, .swiper-button-next{
			top:11rem;
		}
	}
	
</style>
<style>
	.pic_ms .arco-tabs-nav::before {
		display: none;
	}

	.pic_ms .arco-tabs-tab {
		font-size: 1.53rem;
	}

	.pic_ms .arco-tabs-tab-active,
	.H-listM .arco-tabs-tab-active:hover {
		color: #4b4b4b;
		font-weight: bold;
		margin-left: 0px;
	}

	.pic_ms .arco-tabs-nav-ink {
		background: #80b7f5;
	}
	.arco-descriptions-size-medium .arco-descriptions-item-label-block, .arco-descriptions-size-medium .arco-descriptions-item-value-block{
		padding-right:0.5rem;
		color:#6a6a6a;
	}
	@media all and (max-width:768px){
		.pic_ms .arco-tabs-tab{
			font-size:16px;
		}
		
	}
	
</style>

<style>
@import '@/assets/css/all.css';
	@import '@/assets/css/css.css';
</style>

