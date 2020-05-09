<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'static/icon/iconfont.css';
	
	
	@font-face {
	  font-family: 'iconfont';  /* project id 1320979 */
	  src: url('https://at.alicdn.com/t/font_1320979_hje51enudla.eot');
	  src: url('https://at.alicdn.com/t/font_1320979_hje51enudla.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_1320979_hje51enudla.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_1320979_hje51enudla.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1320979_hje51enudla.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_1320979_hje51enudla.svg#iconfont') format('svg');
	}
	
	.custom_text{ color:#ff547b!important; }
	.custom_text2{color:#FFFFFF!important;}
	.custom_btn1{ background-color:#ff547b!important;border-color:#ff547b!important;color: #ffffff!important;border-radius: 0; }
	.custom_btn1 > .am-badge-text{background-color:#ff547b!important; border-color: #ff547b!important;}
	.custom_btn1::before,.custom_btn2::before,.custom_btn_ghost::before{ border: 0px!important; }
	.custom_btn2{ background-color:#ffe6e8!important;color: #ff547b!important;border-color: #ffe6e8!important; border-radius: 0;}
	.custom_btn_ghost{ border-color:#ff547b!important;color: #ff547b!important; }
	.am-badge-text{color: #ff547b!important; border: 1px solid #ff547b!important;}
	.bar-tab-active{ color: #ff547b !important;border-left: 3px solid #ff547b !important;background:#f5f5f9 }
	.am-tabs-default-bar-tab-active{ color: #ff547b!important; }
	.am-tabs-default-bar-underline{ border: 1px #ff547b solid!important; }
	.searchlist-page .searchlist-main .filter .selected{ color: #ff547b!important; }
	.am-modal-button-group-h .am-modal-button{ color: #ff547b!important; }
	.am-modal-button-group-h .am-modal-button:first-child{ color: #333!important; }
	.am-checkbox-inner{ border-color: #ff547b!important;background: #ff547b!important; }
	.am-activity-indicator-spinner{ font-family: "iconfont" !important;background-image: none;width: auto;font-size: 30px;height: auto; }
	.am-activity-indicator-spinner:before{ content:"\\e63b";color:#ff547b!important; }
	.custom_border{border:1px dashed #ff547b!important; }
	
	
	.border{
		box-shadow: 1upx 1upx 1upx 1upx #000000;
	}
	/* 头条小程序需要把 iconfont 样式放到组件外 */
	@import "components/m-icon/m-icon.css";

	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
		font-size: 16px;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		/* min-height: 100%; */
		display: flex;
		flex: 1;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 10px;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 18px;
		line-height: 40px;
	}

	.input-row .title {
		width: 72px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 8px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 25px;
		padding: 10px;
	}

	button.primary {
		background-color: #0faeff;
	}
</style>
