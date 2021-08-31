<template>
	<div>
		<div class="loading_holder" v-if="loading && !database_not_found">
			<loader />
		</div>
		<div class="setup_database_holder" v-if="loading && database_not_found">
			<h2>{{ $t("DATABASE_NOT_FOUND") }}</h2>
			<p v-html="$t('DATABASE_SETUP')"></p>
			<a href="#" target="_blank">{{ $t("DATABASE_MORE_INFO") }}</a>
		</div>
		<div class="password_holder" v-if="!loading && !password_applied">
			<div class="title">{{ $t("ENTER_PASSWORD") }}</div>
			<input
				type="password"
				name="password"
				v-model="password"
				@keyup.enter="checkPassword"
				autocomplete="off"
				data-password-autocomplete="off"
			/>
		</div>
		<div class="right_panel">
			<button
				class="logout"
				@click="logout"
				v-if="!loading && password_applied && database_is_encrypted"
			>
				{{ $t("LOGOUT") }}
			</button>
			<i18nSelect />
		</div>
		<div class="search_holder" v-if="!loading && password_applied">
			<div class="menu">
				<div
					:class="{ menu_item: true, selected: selected_area == 'all' }"
					@click="change_area('all')"
				>
					{{ $t("ALL_DATABASE") }}
				</div>
				<div
					:class="{ menu_item: true, selected: selected_area == 'searchbar' }"
					@click="change_area('searchbar')"
				>
					{{ $t("SEARCHBAR") }}
				</div>
				<div
					:class="{ menu_item: true, selected: selected_area == 'pinned' }"
					@click="change_area('pinned')"
				>
					{{ $t("PINNED") }}
				</div>
			</div>

			<div class="areas">
				<div class="area" v-if="selected_area == 'all'">
					<results
						:list="database"
						:nothing_text="$t('DATABASE_IS_EMPTY')"
						@pin="pin"
					/>
				</div>
				<div class="area" v-if="selected_area == 'searchbar'">
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
					<results
						:display_ids="results.map((x) => x.id)"
						:list="database"
						:nothing_text="search_query ? $t('NO_RESULTS') : ''"
						@pin="pin"
					/>
				</div>
				<div class="area" v-if="selected_area == 'pinned'">
					<results
						:list="database.filter((x) => x.pinned)"
						:nothing_text="$t('NO_PINNED')"
						@pin="pin"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	const crypto = require("crypto");
	const MiniSearch = require("minisearch");
	let miniSearch;
	let localstorage_password_key = `faqelize_${document.location.hostname}_password`;
	let localstorage_pinned_key = `faqelize_${document.location.hostname}_pinned`;

	import i18nSelect from "../components/i18n-select.vue";
	import results from "../components/results.vue";
	import loader from "../components/loader.vue";

	function decryptDatabase(value, password) {
		try {
			let algorithm = "aes256";
			let key = hashPassword(password);
			let decipher = crypto.createDecipher(algorithm, key);
			let decrypted =
				decipher.update(value[1], "hex", "utf8") + decipher.final("utf8");
			return JSON.parse(decrypted);
		} catch (error) {
			return false;
		}
	}

	function hashPassword(password) {
		if (password.length == 32) return password;
		return crypto
			.createHash("sha256")
			.update(password)
			.digest("base64")
			.substr(0, 32);
	}

	export default {
		components: {
			i18nSelect,
			results,
			loader,
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
			};
		},
		methods: {
			async load() {
				let saved_password = localStorage.getItem(localstorage_password_key);
				if (saved_password) this.password = saved_password;
				this.loading = true;
				let database = await this.fetchDB();
				if (database.error) {
					console.error("Can't fetch database", database.error);
					if (database.error == "INVALID_PASSWORD") this.logout();
					if (database.error == "DATABASE_NOT_FOUND")
						this.database_not_found = true;
					return;
				}
				this.loading = false;
				this.password_applied = true;
				this.database_is_encrypted = database.encrypted;
				if (database.encrypted)
					localStorage.setItem(
						localstorage_password_key,
						hashPassword(this.password)
					);
				if (!database.value[0].id) {
					for (let doc_i in database.value) database.value[doc_i].id = doc_i;
				}
				this.database = database.value;
				miniSearch = new MiniSearch.default({
					fields: ["q"],
					storeFields: ["q", "a"],
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
				try {
					content = await axios.get(
						is_dev ? "database.json" : "database_encrypted.json" // TODO REMOVE !
					);
				} catch (error) {
					return { error: "DATABASE_NOT_FOUND" };
				}
				value = content.data;
				if (value) {
					if (value[0] == "encrypted") {
						encrypted = true;
						value = decryptDatabase(value, this.password);
						if (!value) {
							return { error: "INVALID_PASSWORD", encrypted };
						}
					}
				}
				return { value, encrypted };
			},
			checkPassword(e) {
				if (e.keyCode == 13) {
					this.load();
				}
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
				console.log(id, pinned);
				this.database[id].pinned = pinned;
				let pinned_ids = this.database.filter((x) => x.pinned).map((x) => x.id);
				localStorage.setItem(localstorage_pinned_key, JSON.stringify(pinned_ids));
			},
			clearSearchQuery() {
				this.search_query = "";
				this.search();
			},
		},
		mounted() {
			this.load();
		},
	};
</script>

<style lang="scss" scoped>
	.loading_holder {
		text-align: left;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
		width: 80%;
		max-width: 900px;
		margin: 0 auto;
		margin-top: 40px;
		input {
			margin-bottom: 20px;
			padding: 10px 10px;
			border: none;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
			font-size: 16pt;
			width: calc(100% - 20px);
		}
	}

	.logout {
		width: 100%;
		padding: 9px 0px;
		border-radius: 8px;
		color: gray;
		border: 1px solid #d8d8d8;
		background: white;
		cursor: pointer;
		margin-bottom: 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		&:hover {
			color: red;
			border-color: red;
		}
	}

	.right_panel {
		position: absolute;
		right: 25px;
		top: 20px;
		width: 150px;
	}

	.password_holder {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.title {
			margin-bottom: 10px;
			cursor: default;
			font-size: 10pt;
			text-align: center;
		}
		input {
			border: none;
			border-bottom: 1px solid #ddd;
			background: #f9f9f9;
			padding: 10px 20px;
			outline: none;
		}
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
		&:hover {
			opacity: 1;
		}
	}
</style>