<script setup>
import Header from './Header.vue'
</script>

<template>
	<Header />
	<main class="main">
		<slot />
	</main>
</template>

<style scoped>
.main {
	margin-top: 10px;
}
</style>
