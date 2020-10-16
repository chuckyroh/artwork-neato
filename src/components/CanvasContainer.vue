<template>
	<div class="canvas-container">
		<div class="info-bar">
			<slot name="info-bar">Unknown</slot>
		</div>
		<div class="sketch-container">
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: 'CanvasContainer'
}
</script>

<style scoped lang="scss">
.canvas-container {
	@apply border rounded m-4;
}
.info-bar {
	width: 300px;
	height: 50px;
	@apply w-full text-center flex justify-center items-center bg-gray-200;
}
.sketch-container {
	width: 300px;
	height: 300px;
}
</style>
