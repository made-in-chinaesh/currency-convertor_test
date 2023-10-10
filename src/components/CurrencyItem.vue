<script setup>
import { ref } from 'vue'

const props = defineProps({
	name: String,
	charCode: String,
	value: Number,
	previousValue: Number,
})

const rating = ref(props.value > props.previousValue)
</script>

<template>
	<div class="item">
		<h4>{{ props.charCode }} / {{ props.name }}</h4>
		<div class="value">
			<span :class="rating ? 'top' : 'bottom'"
				>{{ rating ? '▲' : '▼' }} {{ props.value }}
			</span>
			<span :class="!rating ? 'top' : 'bottom'"
				>{{ !rating ? '▲' : '▼' }} {{ props.previousValue }}</span
			>
		</div>
	</div>
</template>

<style scoped>
.item {
	padding: 20px;
	border-bottom: 1px solid gainsboro;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 20px;
}

.item h4 {
	font-weight: 500;
}

.item:last-child {
	border-bottom: none;
}

.value {
	display: flex;
	flex-direction: column;
}

.top {
	color: green;
}

.bottom {
	color: red;
}
</style>
