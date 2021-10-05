<template>
	<div class="holder" @click.self="close" v-if="show">
		<div class="popup">
			<h3>Сохрани на рабочий стол 😏</h3>
			<div class="content">
				<template v-if="system == 'ios' && browser == 'safari'">
					Нажми на
					<div class="iosIconShareSwg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							enable-background="new 0 0 50 50"
						>
							<path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z" />
							<path d="M24 7h2v21h-2z" />
							<path
								d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"
							/>
						</svg>
					</div>
					ниже и нажми на
					<div class="iosButton">
						На экран «Домой»
						<div class="iosPlusIcon">+</div>
					</div>
				</template>
				<template v-if="system == 'android' && browser == 'chrome'">
					chrome on android
				</template>
			</div>
			<button class="close" @click="close">Не хочу</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				system: "ios",
				browser: "safari",
				show: false,
			};
		},
		methods: {
			init() {
				this.system = this.getSystem();
				this.browser = this.getBrowser();
				console.log(this.system, this.browser);
			},
			getSystem() {
				var ua = navigator.userAgent;
				var isAndroid = ua.indexOf("Android") > -1;
				var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
				if (isAndroid) {
					return "android";
				} else if (isIOS) {
					return "ios";
				}
			},
			getBrowser() {
				var ua = navigator.userAgent;
				var isChrome = ua.indexOf("Chrome") > -1;
				var isSafari = ua.indexOf("Safari") > -1;
				if (isChrome && isSafari) {
					return "chrome";
				} else if (isSafari) {
					return "safari";
				}
			},
			close() {
				this.$emit("close");
				console.log("close");
			},
		},
		mounted() {
			this.show = this.$faqelize.installAsPWA;
			this.init();
		},
	};
</script>

<style lang="scss" scoped>
	.holder {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 99999;
		.popup {
			background: white;
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 95%;
			height: auto;
			transform: translate(-50%, 0);
			border-radius: 16px 16px 0 0;

			.content {
				margin-bottom: 25px;
			}

			.iosIconShareSwg {
				display: inline-block;
				background-size: contain;
				width: 24px;
				height: 24px;
				position: relative;
				top: 6px;
				svg {
					fill: #2196f3;
				}
			}

			.iosButton {
				background: #eee;
				display: inline-block;
				padding: 10px 30px;
				margin-top: 5px;
				border-radius: 7px;
				padding-left: 15px;
			}

			.iosPlusIcon {
				display: inline-block;
				margin-left: 40px;
				margin-right: -15px;
				border: 2px solid;
				padding: 0px 3px;
				border-radius: 4px;
				line-height: 15px;
				font-weight: bold;
				font-family: Arial;
				color: #363636;
			}

			.close {
				margin-bottom: 30px;
				width: 80%;
				background: black;
				padding: 12px 0px;
				border: unset;
				border-radius: 6px;
				outline: none;
				color: white;
				font-size: 16px;
			}
		}
	}
</style>