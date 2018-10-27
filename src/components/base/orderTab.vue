<template>
	<header class="flex-around flex-align-center">
		<div class="tab-item" :class="{active:urlRouter == '/order'}">
			<router-link to='./order'>
				<p class="tab-title">已完成</p>
			</router-link>
		</div>
		<div class="tab-item" :class="{active:urlRouter == '/waitpay'}">
			<router-link to='./waitpay'>
				<p class="tab-title">待付款</p>
			</router-link>
		</div>
		<!-- <div class="tab-item" :class="{active:urlRouter == '/orderdown'}">
			<router-link to='./orderdown'>
				<p class="tab-title">已完成</p>
			</router-link>
		</div> -->
	</header>
</template>

<script>
	export default {
		props: ['urlRouter'],
		data() {
			return {
				showNum: false
			}
		},
	}
</script>
<style lang="less" scoped>
	@import '../../assets/less/variable';
	header {
		top: .8rem;
		position: absolute;
		width: 100%;
		padding: 0 .2rem;
		height: .88rem;
		background: #ffffff;
		box-sizing: border-box;
		font-size: .24rem;
	}
	
	.tab-item {
		text-align: center;
	}
	
	.tab-title {
		color: @base_textColor;
		padding-bottom: .1rem;
		height: .88rem;
    line-height: .88rem;
		box-sizing: border-box;
	}
	
	.active .tab-title {
		color: @theme_color;
		border-bottom: 1px solid @theme_color;
	}
</style>