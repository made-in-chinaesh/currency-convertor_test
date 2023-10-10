<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import CurrencyField from '@/components/CurrencyField.vue'

const currencies = ref([])
const rates = ref({})

const fromCurrencyValue = ref(0)
const toCurrencyValue = ref(0)

const fromCurrency = ref('BYN')
const toCurrency = ref('USD')

async function fetchCurrencies() {
	try {
		const response = await axios.get(
			'https://www.cbr-xml-daily.ru/daily_json.js',
		)

		currencies.value = Object.entries(response.data.Valute).map(
			([, value]) => value,
		)
	} catch (e) {
		alert('Error fetch currencies')
	}
}

async function fetchRates() {
	try {
		const response = await axios.get('https://www.cbr-xml-daily.ru/latest.js')

		rates.value = response.data.rates
	} catch (e) {
		console.log(e)
	}
}
const handleChangeFromCurrencyValue = value => {
	if (value > 0) {
		const result =
			(value / rates.value[fromCurrency.value]) * rates.value[toCurrency.value]

		toCurrencyValue.value = Number(result.toFixed(4))
	}
	if (value === 0) {
		toCurrencyValue.value = 0
	}
}

const handleChangeToCurrencyValue = value => {
	if (value > 0) {
		const result =
			(rates.value[fromCurrency.value] / rates.value[toCurrency.value]) * value

		fromCurrencyValue.value = Number(result.toFixed(4))
	}
	if (value === 0) {
		fromCurrencyValue.value = 0
	}
}

watch([toCurrency, fromCurrency], () => {
	fromCurrencyValue.value = 0
	toCurrencyValue.value = 0
})

onMounted(() => {
	fetchCurrencies()
	fetchRates()
})
</script>

<template>
	<div class="flex">
		<CurrencyField
			:currencies="currencies"
			v-model:model-input-value="fromCurrencyValue"
			v-model:model-currency="fromCurrency"
			@changeValue="handleChangeFromCurrencyValue"
		/>
		<CurrencyField
			:currencies="currencies"
			v-model:model-currency="toCurrency"
			v-model:model-input-value="toCurrencyValue"
			@changeValue="handleChangeToCurrencyValue"
		/>
	</div>
</template>

<style scoped>
.flex {
	display: flex;
	align-items: center;
	width: fit-content;
	margin: 0 auto;
}
</style>
