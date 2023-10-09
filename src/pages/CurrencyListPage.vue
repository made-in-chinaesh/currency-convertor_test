<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CurrencyItem from '@/components/CurrencyItem.vue'

const currencies = ref([])

async function fetchCurrencies() {
	try {
		const response = await axios.get(
			'https://www.cbr-xml-daily.ru/daily_json.js',
		)

		currencies.value = Object.entries(response.data.Valute).map(
			([, value]) => value,
		)

		console.log(Object.entries(response.data.Valute).map(([, value]) => value))
	} catch (e) {
		console.log(e)
	}
}

onMounted(() => {
	fetchCurrencies()
})
</script>

<template>
	<h2 class="title">Список валют</h2>
	<div class="list">
		<CurrencyItem
			v-for="currency in currencies"
			:key="currency.CharCode"
			:name="currency.Name"
			:char-code="currency.CharCode"
			:value="currency.Value"
			:previous-value="currency.Previous"
		/>
	</div>
</template>

<style scoped>
.title {
	text-align: center;
	margin: 20px 0;
}
.list {
	width: 600px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	border: 1px solid gainsboro;
}
</style>
