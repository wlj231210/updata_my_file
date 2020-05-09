<template>
	<view v-if="userlogin" style="width: 100%;background-color: #DDDDDD;">
		<view v-for="(item,index) in records" :key="index" style="width: 95%;padding: 20upx;overflow: hidden;margin-bottom: 20upx;
    background: #fff;">
			<video :src="item.url" controls style="width: 100%;"></video>
			<text style=" display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;">{{item.name}}</text>
		</view>
		<paging :total="dataList.totalRecodes" activecolor="#fff" activebackground="green" :pageSize='20' :footer="true" :current="1" @changes="dd"></paging>
	</view>
	<view v-else class="content">
		<view class="btn-row">
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import user from '../user/user'
	import paging from '@/components/yang-paging/fy.vue'
	export default {
		components: {
		       paging,user
		},
		data() {
			return {
				userlogin:uni.getStorageSync('token')? true :false,
				filter:{pageNum:1,pageSize:20},
				dataList:{},
				records:[]
			}
		},
		onLoad() {
			uni.showLoading()
			this.getFileUrl(this.filter)
		},
		methods: {
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			},
			dd(index) {
				let filter= {pageNum:index,pageSize:this.filter.pageSize};
				this.filter=filter;
				this.getFileUrl(filter)
							
			},
			async getFileUrl(filter){
				try{
					let res =await this.$api.getFileUrl(filter);
					console.log(res)
					if(res.code ===200) {
						this.dataList= res.dataMap;
						this.records=res.dataMap.records;
						uni.hideLoading();
					}else{
						uni.hideLoading();
						uni.showToast({
							title: res.message,
							mask: false,
							icon:'none',
							duration: 1500
						});
					}
				}catch(e){
					uni.hideLoading();
					uni.showToast({
						title: '请求出错',
						mask: false,
						icon:'none',
						duration: 1500
					});
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style>

</style>
