<template>
	<view style="width:100%;background-color: #EFEFF4;">
		<view class="login">
			<form @submit="formSubmit" >
				<view class="uni-form-item uni-column">
					<text class="custom_text title iconfont iconshou"></text>
					<input type="text" value=""  name="account" placeholder="请输入帐号"
						 placeholder-style="color:#ddd" />
				</view>
				<view class="uni-form-item uni-column">
					<text class="custom_text title iconfont iconxiugaimima"></text>
					<view><input type="password" value="" name="password" placeholder="请输入密码"
						 placeholder-style="color:#ddd" /></view>
				</view>
				<view class="uni-btn-v">
					<button form-type="submit" class="custom_btn1">登录</button>
				</view>
			</form>
		</view>
		<!-- <button class='bottom login' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
			授权登录
		</button> -->
	</view>
</template>

<script>
	export default {
		props:{
			getUserInfo: {
				type: [Boolean],
				default: function() {
					return false;
				}
			}
		},
		data() {
			return {
				// getUserInfo:false，
				usersetcop:true,
				index:0,
				userinfo:{},
				company_list:[],
				company_name:[]
			};
		},
		methods: {
			async wxGetUserInfo() {
				let This = this;
				uni.showModal({
					title: '微信登录',
					content: '商城需要获取你的用户信息',
					success: function(res) {
						if (res.confirm) {
							This.getuserin()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			async formSubmit(e){
				console.log(e)
				uni.showLoading({
					title: '正在登录'
				});
				let data = e.detail.value;
				// try{
					let res =await this.$api.login(data);
					console.log(res)
					if(res.code ===200) {
						uni.setStorage({key:'token',data: res.dataMap.token});
						uni.navigateTo({
							url:'/pages/index/index'
						})
						// this.$store.dispatch('change', res.data);
						// this.$emit('ming',true);
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
				// }catch(e){
				// 	uni.hideLoading();
				// 	uni.showToast({
				// 		title: '请求出错',
				// 		mask: false,
				// 		icon:'none',
				// 		duration: 1500
				// 	});
				// 	//TODO handle the exception
				// }
			},
			getuserin() {
				let This = this;
				//更新登陆状态
				uni.showLoading({
					title: '正在登录'
				});
				try {
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							// console.log(infoRes)
							// let nickName = infoRes.userInfo.nickName; //昵称
							// let avatarUrl = infoRes.userInfo.avatarUrl; //头像
							// This.userData['nickName'] = nickName;
							// This.userData['avatarUrl'] = avatarUrl;
							// This.getUserInfo = true;
							// uni.setStorageSync('userInfo', infoRes.userInfo);
							This.$store.dispatch('change', infoRes.userInfo);
							This.$emit('ming',true)
							uni.hideLoading();
							try {
								uni.setStorageSync('isCanUse', false); //记录是否第一次授权  false:表示不是第一次授权
								_this.updateUserInfo();
							} catch (e) {}
						},
						fail(res) {}
					});
				} catch (e) {}
			}
		
		}
	}
</script>

<style lang="less">

		.login{
			width: 80%;
			// margin-top: 50%;
			margin: 50% auto;
			padding: 20px;
			background: #fff;

				.uni-form-item{
					position: relative;
					margin-bottom: 20upx;
					border: 1px solid #ddd;
					border-radius: 4upx;
					.title{
						line-height: 0;
						position: absolute;
						left: 18rpx;
						font-size: 44rpx;
						top: 50%;
						transform: translateY(-50%);
					}
					input{
						padding:14upx 14upx 14upx 70upx;
						background-color: #FFFFFF;
						border-radius: 4upx;
					}
				}
			
			
				.uni-btn-v{
					border-radius: 4upx;
					button{
						line-height: 70upx;
						font-size: 26upx;
						height: 70upx;
					}
			}
			.select-login{
				background-color:  #FFFFFF;
				padding:20upx;
				.title1{
					padding-bottom: 20upx;
					display: block;
				}
				select{
						font-size: 24upx;
						border: 1px solid #ddd;
						padding: 5px;

				}
			}
		}
</style>
