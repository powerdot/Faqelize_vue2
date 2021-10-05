<template>
	<div class="setup_database_holder">
		<h2>{{ $t("DATABASE_NOT_FOUND") }}</h2>
		<p v-html="$t('DATABASE_SETUP')"></p>
		<a href="#" target="_blank">{{ $t("DATABASE_MORE_INFO") }}</a>
	</div>
</template>