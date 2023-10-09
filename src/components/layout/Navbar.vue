<script setup>
const items = [
	{ id: 1, text: 'Главная', href: '/' },
	{ id: 2, text: 'Конвертер', href: '/converter' },
]
</script>

<template>
	<nav class="nav">
		<ul class="list">
			<li class="item">
				<router-link
					v-for="item in items"
					v-bind:key="item.id"
					v-bind:to="item.href"
					>{{ item.text }}</router-link
				>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
.list {
	display: flex;
	align-items: center;
}

.item a {
	margin: 0 20px;
	color: black;
}
</style>
