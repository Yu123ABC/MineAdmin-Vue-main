<template>
	<header-nav></header-nav>
	<div class="H_content">
		<div class="w1400 clearfix" style="text-align: center;">
			<div class="ss_box clearfix">
				<a-space direction="vertical" size="large" style="background:white">
				   <a-input :style="{width:'46rem'}" placeholder="试试搜索一段话" allow-clear >
					  <!-- <template #prepend>
						<a-select default-value="图片" placeholder="图片" style="background:white;">
						  <a-option>图片</a-option>
						</a-select>
					  </template> -->
					  <template #append style="padding:0px;background:#f07700;">
						 <a-button type="primary"><img src="../../assets/ssk.png" alt="" class="ss">搜 索</a-button>
					  </template>
					</a-input>
				</a-space>
			</div>
			<div class="H-listM clearfix">
				<a-tabs>
				    <template #extra>
				      <a-button key="1">2024</a-button>
					  <a-button>2023</a-button>
					  <a-button>2022</a-button>
					  <a-button>2021</a-button>
					  <a-button>2020</a-button>
					  <a-select placeholder="2019" :trigger-props="{ autoFitPopupMinWidth: true }">
					        <a-option>2024</a-option>
					        <a-option>2023</a-option>
					        <a-option>2022</a-option>
							<a-option>2021</a-option>
							<a-option>2020</a-option>
							<a-option>2019</a-option>
					   </a-select>
				    </template>
				    <a-tab-pane key="1" title="图片">
				        <a-row class="grid-demo">
							<a-col :span="7">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
									</a>
									<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="7">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="10">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
							   </div>
							</a-col>
						</a-row>
						
						<a-row class="grid-demo">
							<a-col :span="8">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
									</a>
									<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="8">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="8">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
							   </div>
							</a-col>
						</a-row>
						
						<a-row class="grid-demo">
							<a-col :span="9">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
									</a>
									<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="8">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="7">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
							   </div>
							</a-col>
						</a-row>
						
						<a-row class="grid-demo">
							<a-col :span="8">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
									</a>
									<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="7">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="9">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
							   </div>
							</a-col>
						</a-row>
						
						<a-row class="grid-demo">
							<a-col :span="7">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
									</a>
									<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="7">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
							   </div>
							</a-col>
							<a-col :span="10">
							  <div class="img_cc">
								  <a href="">
									  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
								  </a>
								  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
							   </div>
							</a-col>
						</a-row>
						
						
				    </a-tab-pane>
				    <a-tab-pane key="2" title="视频">
				      <a-row class="grid-demo">
				      	<a-col :span="7">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      			</a>
				      			<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="7">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="10">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      </a-row>
				      
				      <a-row class="grid-demo">
				      	<a-col :span="8">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      			</a>
				      			<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="8">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="8">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      </a-row>
				      
				      <a-row class="grid-demo">
				      	<a-col :span="9">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      			</a>
				      			<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="8">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="7">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      </a-row>
				      <a-row class="grid-demo">
				      	<a-col :span="8">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      			</a>
				      			<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="7">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="9">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      </a-row>
				      
				      <a-row class="grid-demo">
				      	<a-col :span="7">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      			</a>
				      			<p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="7">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      	<a-col :span="10">
				      	  <div class="img_cc">
				      		  <a href="">
				      			  <img src="http://www.anhuinews.com/40396/202105/W020240507401135838841.jpg" alt="">
				      		  </a>
				      		  <p class="ell"><a href="">追踪：瑶海区被曝光的油烟瑶海区被曝光的油烟扰民现象多处已整改扰民现象多处已整改</a></p>
				      	   </div>
				      	</a-col>
				      </a-row>
				    </a-tab-pane>
				</a-tabs>
				
				
			</div>
		</div>
	</div>
	<footer-box></footer-box>
</template>

<script>
	import headerNav from '@/components/header/header.vue'
	import footerBox from '@/components/header/footer.vue'
	export default {
		name: "",
		data() {
			return {
				
			}
		},
		components: {
		    headerNav,
			footerBox
		},
		setup() {
			
		}
	}
</script>

<style scoped="">
	.H_content{
		background:url(../../assets/cM_bg1.jpg) no-repeat center top;
		background-size: 100%;
		padding-bottom:5.5rem;
	}
	.ss_box{
		padding:35rem 0px 21rem 0px;
	}
	.ss{
		display:inline-block;
		width:2rem;
		margin-right:0.5rem;
		min-width:12px;
	}
	.img_cc{
		height:19.3rem;
		position: relative;
		width:95%;
		margin:0px auto;
		border-radius:0.8rem;
		overflow: hidden;
	}
	.img_cc>a{
		display: block;
		width:100%;
		height:100%;
		position: relative;
		overflow: hidden;
	}
	.img_cc>a img{
		display: block;
		width:100%;
		min-height:100%;
		transition: all 0.5s;
	}
	.img_cc>a:hover img{
		transform:scale(1.3);
		transition: all 0.5s;
	}
	.img_cc p{
		position: absolute;
		bottom:0px;
		left:0px;
		right:0px;
		padding: 1rem 2% 1rem 2%;
		color:white;
		font-size:1.3rem;
		background:url(../assets/zazx_xwfb_bg_2019.png);
	}
	.img_cc p a{
		color:white;
	}
	@media all and (max-width:992px){
		.ss_box{
			padding:26rem 0px 16rem 0px;
		}
		.ss_box .arco-space-item .arco-input-outer{
			width:80rem !important;
		}
		.H_content .arco-btn-primary, .H_content .arco-btn-primary[type='button'], .H_content .arco-btn-primary[type='submit']{
			width:19rem
		}
		.H-listM .arco-tabs-nav-extra>.arco-btn{
			display: none
		}
		.H-listM .arco-select-view-single{
			width:14.5rem;
		}
	}
</style>

<style>
@import '@/assets/css/all.css';
	@import '@/assets/css/css.css';
</style>

