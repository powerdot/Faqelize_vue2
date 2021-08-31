<template>
	<div class="results">
		<div class="no_results" v-if="local_list.length == 0">
			{{ nothing_text }}
		</div>
		<div class="result" v-for="item of local_list" :key="'result' + item.id">
			<button :class="{ pin: true, pinned: item.pinned }" @click="pin(item)">
				<i :class="['bi', item.pinned ? 'bi-star-fill' : 'bi-star']"></i>
			</button>
			<b>{{ item.q }}</b>
			<br />
			{{ item.a }}
		</div>
	</div>
</template>

<script>
	export default {
		props: ["display_ids", "list", "nothing_text"],
		data() {
			return {
				local_list: [],
			};
		},
		methods: {
			pin(item) {
				this.$emit("pin", { id: item.id, pinned: !item.pinned });
			},
			updateList() {
				if (this.display_ids) {
					this.local_list = this.list.filter((item) =>
						this.display_ids.includes(item.id)
					);
					return;
				}
				this.local_list = this.list;
			},
		},
		mounted() {
			this.updateList();
		},
		watch: {
			list() {
				this.updateList();
			},
			display_ids() {
				this.updateList();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.results {
		.no_results {
			text-align: center;
			cursor: default;
			color: gray;
			padding: 17px;
			font-size: 10pt;
		}
		.result {
			background: #eee;
			padding: 15px;
			margin-bottom: 5px;
			text-align: left;
			border-left: 2px solid #cccccc;
			position: relative;
			.pin {
				position: absolute;
				left: -28px;
				top: 5px;
				background: unset;
				border: unset;
				opacity: 0.5;
				cursor: pointer;
			}
			&:hover {
				border-left-color: #3f51b5;
				.pin {
					opacity: 1;
					&:hover {
						color: #3f51b5;
					}
				}
				.pin.pinned:hover {
					color: #e8c400;
				}
			}
			.pin.pinned {
				color: gold;
				opacity: 1;
			}
		}
	}
</style>