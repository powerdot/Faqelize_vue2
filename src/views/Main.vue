<template>
	<div>
		<!-- Loading view -->
		<Loader v-if="loading && !database_not_found" />

		<!-- Database error view -->
		<DatabaseError v-if="loading && database_not_found" />

		<!-- Password view -->
		<EnterPassword
			v-if="!loading && !password_applied"
			@password-entered="checkPassword"
			:logo="getLogo"
		/>

		<!-- Answer page component -->
		<SubPage ref="subPage" :pageTitle="pageTitle">
			<component :is="pageToOpen" />
		</SubPage>

		<!-- Control panel -->
		<div class="right_panel">
			<logout
				v-if="!loading && password_applied && database_is_encrypted"
				@logout="logout"
			/>
			<i18nSelect />
		</div>

		<!-- Main view -->
		<div class="search_holder" v-if="!loading && password_applied">
			<div
				class="logo"
				v-if="getLogo"
				:style="{ backgroundImage: `url(${getLogo})` }"
			></div>
			<div class="menu_and_search">
				<div class="menu">
					<div
						:class="{ menu_item: true, selected: selected_area == 'all' }"
						@click="change_area('all')"
					>
						{{ $t("ALL_DATABASE") }}
					</div>
					<div
						:class="{ menu_item: true, selected: selected_area == 'pinned' }"
						@click="change_area('pinned')"
						v-if="usePins"
					>
						{{ $t("PINNED") }}
					</div>
				</div>
				<template v-if="selected_area == 'all'">
					<input
						type="text"
						:placeholder="$t('SEARCH')"
						@keyup="search"
						v-model="search_query"
					/>
					<button
						v-if="search_query != ''"
						class="clear"
						@click="clearSearchQuery"
					>
						<i class="bi bi-x"></i>
					</button>
				</template>
			</div>

			<div class="areas">
				<div class="area" v-if="selected_area == 'all'">
					<template v-if="!search_query">
						<Results
							:list="database"
							:nothing_text="$t('DATABASE_IS_EMPTY')"
							@pin="pin"
							@open="openItem"
						/>
					</template>
					<template v-else>
						<Results
							:display_ids="results.map((x) => x.id)"
							:list="database"
							:nothing_text="search_query ? $t('NO_RESULTS') : ''"
							@pin="pin"
							@open="openItem"
						/>
					</template>
				</div>
				<div class="area" v-if="selected_area == 'searchbar'"></div>
				<div class="area" v-if="selected_area == 'pinned'">
					<Results
						:display_ids="pinned_ids"
						:list="database"
						:nothing_text="$t('NO_PINNED')"
						@pin="pin"
						@open="openItem"
					/>
				</div>
			</div>
		</div>

		<!-- PWA install promotion component -->
		<SuggestPWAInstall ref="SuggestPWAInstall" :autoInit="false" />
	</div>
</template>

<script>
	import axios from "axios";
	const MiniSearch = require("minisearch");
	let miniSearch;
	let localstorage_password_key = `faqelize_${document.location.hostname}_password`;
	let localstorage_pinned_key = `faqelize_${document.location.hostname}_pinned`;

	let crypto = require("../components/crypto");
	let cacheStorage = require("../components/cacheStorage");

	import i18nSelect from "../components/i18n-select.vue";
	import logout from "../components/logout.vue";
	import Results from "../components/results.vue";
	import Loader from "../components/loader.vue";
	import SubPage from "../components/subPage.vue";
	import SuggestPWAInstall from "../components/SuggestPWAInstall.vue";
	import DatabaseError from "../components/DatabaseError.vue";
	import EnterPassword from "../components/EnterPassword.vue";

	export default {
		components: {
			i18nSelect,
			logout,
			Results,
			Loader,
			SubPage,
			SuggestPWAInstall,
			DatabaseError,
			EnterPassword,
		},
		computed: {
			getLogo() {
				let logo_config = this.$faqelize.logo;
				let default_logo_path = "./img/logo.png";
				if (this.$faqelize.acceptLogoParameter) {
					let logo = this.$route.query[this.$faqelize.logoParameterKey];
					if (logo) return logo;
				}
				if (typeof logo_config == "string") {
					if (!logo_config) return default_logo_path;
					return logo_config;
				}
				if (typeof logo_config == "boolean") {
					if (logo_config) return default_logo_path;
					return false;
				}
			},
		},
		data() {
			return {
				results: [],
				database: [],
				search_query: "",
				password: "",
				loading: true,
				password_applied: false,
				database_is_encrypted: false,
				database_not_found: false,
				selected_area: "all",
				pinned_ids: [],
				pageToOpen: "",
				pageTitle: "",
				usePins: false,
			};
		},
		methods: {
			async load() {
				this.loading = true;

				let saved_password = this.$faqelize.savePassword
					? localStorage.getItem(localstorage_password_key)
					: "";

				if (
					window.navigator.standalone &&
					this.$faqelize.savePassword &&
					!saved_password
				) {
					let cache_password = await cacheStorage.get("saved_password");
					if (cache_password) {
						saved_password = cache_password;
					}
				}

				if (saved_password) {
					this.password = saved_password;
				}

				// Accept login by &password URL parameter.
				if (this.$faqelize.acceptPasswordParameter) {
					let password = this.$route.query[this.$faqelize.passwordParameterKey];
					if (password) {
						this.password = password;
						let query = Object.assign({}, this.$route.query);
						delete query[this.$faqelize.passwordParameterKey];
						this.$router.replace({ query });
					}
				}

				let database = await this.fetchDB();
				if (database.error) {
					console.error("Can't fetch database", database.error);
					if (database.error == "INVALID_PASSWORD") this.logout();
					if (database.error == "DATABASE_NOT_FOUND")
						this.database_not_found = true;
					return;
				}
				this.password_applied = true;
				this.database_is_encrypted = database.encrypted;
				if (database.encrypted && this.$faqelize.savePassword) {
					let password_hash = crypto.hashPassword(this.password);
					localStorage.setItem(localstorage_password_key, password_hash);
					await cacheStorage.set("saved_password", password_hash);
				}
				if (!database.value[0].id) {
					for (let doc_i in database.value) database.value[doc_i].id = doc_i;
				}
				this.database = database.value;
				miniSearch = new MiniSearch.default({
					fields: ["q"],
					storeFields: ["q", "a"],
					searchOptions: {
						fuzzy: 0.2,
					},
				});
				miniSearch.addAll(database.value);

				// load pinned ids from localstorage
				let pinned_ids = localStorage.getItem(localstorage_pinned_key);
				if (!pinned_ids) {
					localStorage.setItem(localstorage_pinned_key, JSON.stringify([]));
					pinned_ids = "[]";
				}
				this.pinned_ids = JSON.parse(pinned_ids);
				for (let id of this.pinned_ids) {
					let doc = this.database.find((x) => x.id == id);
					if (doc) doc.pinned = true;
				}
				this.loading = false;
				this.$refs.SuggestPWAInstall.init();
			},
			search() {
				let results = miniSearch.search(this.search_query);
				this.results = results;
			},
			async fetchDB() {
				let value = [];
				let encrypted = false;
				let is_dev = process.env.NODE_ENV == "development";
				let content;
				let dbloc = "";
				if (this.$faqelize.database == "local") {
					if (is_dev) {
						dbloc = "database.json";
					} else {
						dbloc = this.$faqelize.encryptDatabase
							? "database_encrypted.json"
							: "database.json";
					}
				} else {
					dbloc = this.$faqelize.database.toString();
				}
				if (this.$faqelize.acceptDatabaseParameter) {
					if (this.$route.query[this.$faqelize.databaseParameterKey]) {
						dbloc = this.$route.query[this.$faqelize.databaseParameterKey];
					}
				}
				try {
					content = await axios.get(dbloc);
				} catch (error) {
					return { error: "DATABASE_NOT_FOUND" };
				}
				value = content.data;
				if (value) {
					if (value[0] == "encrypted") {
						encrypted = true;
						value = crypto.decryptDatabase(value, this.password);
						if (!value) {
							return { error: "INVALID_PASSWORD", encrypted };
						}
					}
				}
				return { value, encrypted };
			},
			checkPassword(password) {
				this.password = password.toString();
				this.load();
			},
			logout() {
				this.loading = false;
				this.password_applied = false;
				localStorage.removeItem(localstorage_password_key);
				this.password = "";
				this.search_query = "";
				this.results = [];
			},
			change_area(area) {
				this.selected_area = area;
			},
			pin({ id, pinned }) {
				this.database[id].pinned = pinned;
				if (pinned) {
					if (this.pinned_ids.includes(id)) return;
					this.pinned_ids.push(id);
				} else {
					this.pinned_ids = this.pinned_ids.filter((x) => x != id);
				}

				this.$forceUpdate();
				console.log(this.pinned_ids);
				localStorage.setItem(
					localstorage_pinned_key,
					JSON.stringify(this.pinned_ids)
				);
			},
			clearSearchQuery() {
				this.search_query = "";
				this.search();
			},
			openItem(item) {
				this.pageToOpen = item.a.page.toString();
				this.$refs.subPage.open();
				this.pageTitle = item.q;
			},
		},
		mounted() {
			this.usePins = this.$faqelize.usePins;
			this.load();
		},
	};
</script>

<style lang="scss" scoped>
	.menu_and_search {
		position: sticky;
		top: 0;
		z-index: 2;
		padding-top: 10px;
		margin-bottom: 20px;
		background: white;
	}

	.menu {
		display: flex;
		border-bottom: 2px solid #eee;
		margin-bottom: 10px;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		.menu_item {
			padding: 10px;
			cursor: pointer;
			border-bottom: 2px solid transparent;
			margin-bottom: -2px;
			&:hover {
				border-color: #ddd;
			}
			&.selected {
				cursor: default;
				border-color: blue;
			}
		}
	}

	.search_holder {
		width: 90%;
		max-width: 900px;
		margin: 0 auto;
		margin-top: 40px;
		input {
			padding: 10px 10px;
			border: none;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
			font-size: 16pt;
			width: calc(100% - 20px);
			-webkit-appearance: none;
			border-radius: unset;
			margin: unset;
		}

		.logo {
			height: 40px;
			width: 50%;
			background-position: center left;
			background-size: contain;
			background-repeat: no-repeat;
			margin-left: 10px;
			margin-top: -16px;
		}
	}

	.right_panel {
		position: absolute;
		right: 25px;
		top: 20px;
		width: 150px;
		z-index: 4;
	}

	.clear {
		position: absolute;
		margin-left: -35px;
		margin-top: 10px;
		font-size: 20px;
		background: unset;
		border: unset;
		outline: none;
		cursor: pointer;
		opacity: 0.5;
		color: black;
		&:hover {
			opacity: 1;
		}
	}
</style>

<style lang="scss" scoped>
	// mobile query
	@media only screen and (max-width: 600px) {
		.right_panel {
			right: 10px;
			z-index: 3;
			display: flex;
			justify-content: flex-start;
			align-items: self-start;
			flex-direction: row-reverse;
		}

		.clear {
			opacity: 1;
			padding: 0;
		}

		.search_holder {
			width: 100%;
		}

		.menu_and_search {
			background: rgba(255, 255, 255, 1);
			// -webkit-backdrop-filter: saturate(180%) blur(20px);
			// backdrop-filter: saturate(180%) blur(20px);
			padding: 0px 0px;
			padding-top: 5px;
		}
		.search_holder input {
			padding: 10px 20px;
			width: calc(100% - 40px);
			outline: none;
		}
		.menu {
			margin-left: 10px;
			margin-right: 10px;
		}
	}

	@media only screen and (max-width: 320px) {
		.search_holder {
			margin-top: 70px;
		}
	}
</style>