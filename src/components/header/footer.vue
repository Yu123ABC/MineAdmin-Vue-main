<template>
	<div class="footer clearfix">
		<div class="w1400 clearfix">
			<a-layout>
				<a-row class="grid-demo">
				        <a-col :xs="24" :md="8" :lg="10">
							 <a-row class="grid-demo">
								<a-col :xs="5" :span="8">
								  <img src="../../assets/dh.png" alt="" style="margin-right:0px;">
								</a-col>
								<a-col :span="8">
								  <img src="../../assets/zc.png" alt="" style="width:60%;">
								</a-col>
								<a-col :span="5">
								  <img src="../../assets/ewm.png" alt="" style="width:100%;">
								</a-col>
							  </a-row>
							<a-layout-sider style="width:10rem;padding-right: 4rem;"></a-layout-sider>
				        </a-col>
						<a-col :xs="24" :md="16" :lg="14">
							<a-layout-content style="">
								<p>主办单位:安徽省人民政府外事办公室  网站地图  隐私保护</p>
								<p>皖公网安备34011102001498号  皖ICP备10002847号-1   网站标识码:3400000064</p>
								<p>地址:安省合肥市包河区中山路1号省行政中心3号楼  联系方式:0551-62703790</p>
								<p>邮编:230091邮箱:xxgk@ahfao.gov.cn</p>
							</a-layout-content>
						</a-col>	
				</a-row>	
				
			</a-layout>
		</div>
	</div>
</template>

<style scoped="">
	.footer{
		background:#0155b2;
		    padding: 6rem 0px;
			color:white;
	}
	.footer img{
	    display: block;
	    width: 30%;
	    margin: 0px auto;
	}
	.footer a{
		color:white;
	}
</style>
<style>
	.footer .arco-layout-sider-children{
		    display: flex;
		    align-items: center;
	}
	.footer .arco-layout-sider-light{
		background:none;
		box-shadow:none;
	}
	.footer .arco-row-justify-start{
		align-items: center;
	}
	.footer .arco-layout-content{
		font-size:1.25rem;
		line-height:2.4rem;
		padding-left:4rem;display: flex;align-items: center;flex-wrap: wrap;
		position: relative;
	}
	.footer .arco-layout-content::after{
		content:"";
		position: absolute;
		left:-2.3rem;
		top:0px;
		bottom:0px;
		width:1px;
		background:#80aad9;
	}
	@media all and (max-width:768px){
		.footer .arco-layout-content{
			margin-top:5rem;
			border: none;
			text-align: center;
			justify-content: center;
			    line-height: 5rem;
		}
	}
</style>