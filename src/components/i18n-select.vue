<template>
	<div class="language_picker">
		<select v-model="lang" @change="changeLanguage">
			<option
				v-for="lang in langs"
				:value="lang.code"
				:key="'locale-' + lang.code"
			>
				{{ lang.name }}
			</option>
		</select>
		<div class="label">{{ $t("SELECT_LANG") }}</div>
	</div>
</template>

<script>
	let localstorage_password_locale = `faqelize_${document.location.hostname}_locale`;

	export default {
		data() {
			return {
				lang: "en",
				langs: [],
				localeNames: {
					en: "English",
					fr: "Français",
					de: "Deutsch",
					es: "Español",
					it: "Italiano",
					pt: "Português",
					ru: "Русский",
					zh: "中文",
					ja: "日本語",
					ko: "한국어",
					ar: "العربية",
					tr: "Türkçe",
					vi: "Tiếng Việt",
				},
			};
		},
		mounted() {
			let avaliableLocales = this.$i18n.availableLocales;
			for (let al of avaliableLocales) {
				this.langs.push({
					code: al,
					name: this.localeNames[al] || al,
				});
			}

			// localStorage local setting
			let lang = localStorage.getItem(localstorage_password_locale);
			this.lang = lang || this.$i18n.locale || this.$i18n.fallbackLocale;

			this.changeLanguage();
		},
		methods: {
			changeLanguage() {
				this.$i18n.locale = this.lang;
				localStorage.setItem(localstorage_password_locale, this.lang);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.language_picker {
		// position: absolute;
		// right: 40px;
		// top: 60px;
		width: 100%;
		padding: 20px 0px;
		border-radius: 20px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		text-align: center;
		background-color: #fff;
		// width: 145px;
		.label {
			color: gray;
			cursor: default;
			font-size: 10px;
			margin-top: 5px;
		}
	}
</style>