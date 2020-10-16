<template>
	<canvas-container>
		<template v-slot:info-bar>
			<p class="text-gray-700 text-center">{{ user.name }}</p>
		</template>
		<template v-slot:default>
			<div ref="sketchContainer"></div>
		</template>
	</canvas-container>
</template>

<script>
import P5 from 'p5'
import { ref, reactive, onMounted } from 'vue'
import CanvasContainer from './CanvasContainer.vue'

// sketch functions
const sketch = p => {
	const canvasHeight = 300
	const canvasWidth = 300

	var xpos = 0
	var xspeed = 1

	p.setup = () => {
		p.createCanvas(canvasWidth, canvasHeight)
		p.frameRate(30)
	}

	p.draw = () => {
		p.background(255)

		for (var row = 0; row < canvasHeight / 10; row++) {
			const y = (row * 10) + 5

			for (var col = 0; col <= canvasWidth / 10; col++) {
				const reverse = row % 2 === 0 ? -1 : 1
				const x = (col * 10) + (xpos * reverse)
				p.circle(x, y, 5)
			}
		}

		xpos = xpos + xspeed
		if (xpos === 10) xpos = 0
	}
}

export default {
	name: 'CanvasOne',
	props: {

	},
	components: {
		CanvasContainer
	},
	setup (props, context) {
		// user information
		const user = reactive({
			name: 'Charles Roh'
		})

		// p5 related
		const sketchContainer = ref(null)
		const sketcher = ref(null)
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
