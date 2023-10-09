<script setup>
const props = defineProps({
	currencies: Array,
	modelInputValue: Number,
	modelCurrency: String,
})

const emit = defineEmits([
	'update:modelInputValue',
	'update:modelCurrency',
	'changeValue',
])

const handleChangeInput = e => {
	emit('update:modelInputValue', Number(e.target.value))
	emit('changeValue', Number(e.target.value))
}

const handleChangeCurrency = e => {
	emit('update:modelCurrency', e.target.value)
}
</script>

<template>
	<div class="block">
		<select
			class="select"
			@change="handleChangeCurrency"
			:value="modelCurrency"
		>
			<option
				v-for="currency in props.currencies"
				:key="currency.Name"
				:value="currency.CharCode"
			>
				{{ currency.CharCode }} / {{ currency.Name }}
			</option>
		</select>
		<input
			type="number"
			class="input"
			:value="props.modelInputValue"
			@input="handleChangeInput"
		/>
	</div>
</template>

<style scoped>
.block {
	display: flex;
	flex-direction: column;
	padding: 15px;
	border: 1px solid gainsboro;
	border-radius: 6px;
	margin: 10px;
	width: 400px;
}

.select {
	padding: 20px;
	border: 1px solid gainsboro;
	border-radius: 6px;
	font-size: 20px;
}

.input {
	margin-top: 10px;
	padding: 20px;
	border: 1px solid gainsboro;
	font-size: 40px;
	border-radius: 6px;
}
</style>
