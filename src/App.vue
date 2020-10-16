<template>
	<div class="app">
		<div class="canvas-board">
			<canvas-one />
		</div>
	</div>
</template>

<script>
import CanvasOne from './components/CanvasOne.vue'

export default {
	name: 'App',
	components: {
		CanvasOne
	}
}
</script>

<style scoped lang="scss">
.canvas-board {
	@apply flex flex-wrap justify-around;
}
</style>
