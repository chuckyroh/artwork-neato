<template>
	<div class="canvas-one">
		<p>{{ user.name }}</p>
		<div ref="sketchContainer"></div>
	</div>
</template>

<script>
import P5 from 'p5'
import { ref, reactive, onMounted } from 'vue'

// sketch functions
const sketch = p => {
	const x = 100
	const y = 100

	p.setup = () => {
		p.createCanvas(700, 410)
	}

	p.draw = () => {
		p.background(0)
		p.fill(255)
		p.rect(x, y, 50, 50)
	}
}

export default {
	name: 'CanvasOne',
	props: {

	},
	setup (props, context) {
		// user information
		const user = reactive({
			name: 'Charles Roh'
		})

		// p5 related
		const sketchContainer = ref(null)
		var sketcher = ref(null)
		onMounted(() => {
			sketcher.value = new P5(sketch, sketchContainer.value)
		})

		return {
			user,
			sketchContainer,
			sketcher
		}
	}
}
</script>

<style scoped lang="scss">

</style>
