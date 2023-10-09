<script setup>
import Layout from '@/components/layout/Layout.vue'
</script>

<template>
	<Layout>
		<router-view></router-view>
	</Layout>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	font-family: 'Fira Code', monospace;
}

.container {
	width: 1200px;
	margin: 0 auto;
}
</style>
